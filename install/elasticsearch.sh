#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH
LANG=en_US.UTF-8

setup_path="/www"
python_bin=${setup_path}/server/panel/pyenv/bin/python
elasticsearch_path="/www/server/elasticsearch"
pid_path="/var/run/elasticsearch"
plugin_path="/www/server/panel/plugin/elasticsearch"

Get_Public() {
    public_file=/www/server/panel/install/public.sh
    publicFileMd5=$(md5sum ${public_file} 2>/dev/null | awk '{print $1}')
    md5check="8e49712d1fd332801443f8b6fd7f9208"
    if [ "${publicFileMd5}" != "${md5check}" ]; then
        wget -O Tpublic.sh https://node.aapanel.com/install/public.sh -T 20
        publicFileMd5=$(md5sum Tpublic.sh 2>/dev/null | awk '{print $1}')
        if [ "${publicFileMd5}" == "${md5check}" ]; then
            \cp -rpa Tpublic.sh $public_file
        fi
        rm -f Tpublic.sh
    fi

    . "${public_file}"

    download_Url=$NODE_URL
}

Get_Ip_Address() {
    getIpAddress=""
    getIpAddress=$(curl -sS --connect-timeout 10 -m 60 https://www.bt.cn/Api/getIpAddress)
    if [ -z "${getIpAddress}" ] || [ "${getIpAddress}" = "0.0.0.0" ]; then
        isHosts=$(cat /etc/hosts | grep 'www.bt.cn')
        if [ -z "${isHosts}" ]; then
            echo "" >>/etc/hosts
            echo "116.213.43.206 www.bt.cn" >>/etc/hosts
            getIpAddress=$(curl -sS --connect-timeout 10 -m 60 https://www.bt.cn/Api/getIpAddress)
            if [ -z "${getIpAddress}" ]; then
                sed -i "/bt.cn/d" /etc/hosts
            fi
        fi
    fi

    ipv4Check=$(${python_bin} -c "import re; print(re.match('^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$','${getIpAddress}'))")
    if [ "${ipv4Check}" == "None" ]; then
        ipv6Address=$(echo ${getIpAddress} | tr -d "[]")
        ipv6Check=$(${python_bin} -c "import re; print(re.match('^([0-9a-fA-F]{0,4}:){1,7}[0-9a-fA-F]{0,4}$','${ipv6Address}'))")
        if [ "${ipv6Check}" == "None" ]; then
            getIpAddress="SERVER_IP"
        fi
    fi

    if [ "${getIpAddress}" != "SERVER_IP" ]; then
        echo "${getIpAddress}" >${setup_path}/server/panel/data/iplist.txt
    fi
    LOCAL_IP=$(ip addr | grep -E -o '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' | grep -E -v "^127\.|^255\.|^0\." | head -n 1)
}

System_Lib() {
    ${PM} install -y sudo curl unzip wget
}

Download_Lib() {
    if [[ ! -f /tmp/elasticsearch-8.9.0-linux-x86_64.tar.gz ]]; then
        wget -O /tmp/elasticsearch-8.9.0-linux-x86_64.tar.gz ${download_Url}/src/elasticsearch/elasticsearch-8.9.0-linux-x86_64.tar.gz -T 20
    fi
    tar -xvf /tmp/elasticsearch-8.9.0-linux-x86_64.tar.gz -C /www/server/
    mv ${elasticsearch_path}-8.9.0 ${elasticsearch_path}

    mkdir -p ${elasticsearch_path}/plugin/ik
    if [[ ! -f /tmp/elasticsearch-analysis-ik-8.9.0.zip ]]; then
        wget -O /tmp/elasticsearch-analysis-ik-8.9.0.zip ${download_Url}/src/elasticsearch/elasticsearch-analysis-ik-8.9.0.zip -T 20
    fi
    unzip /tmp/elasticsearch-analysis-ik-8.9.0.zip -d ${elasticsearch_path}/plugin/ik
    rm -f elasticsearch-8.9.0-linux-x86_64.tar.gz
    rm -f elasticsearch-analysis-ik-8.9.0.zip
}

Install_Elasticsearch() {
    have_elasticsearch_user=$(
        id -u elasticsearch >/dev/null 2>&1
        echo $?
    )
    if [ ${have_elasticsearch_user} -ne 0 ]; then
        groupadd elasticsearch
        useradd -g elasticsearch elasticsearch
    fi

    chown -R elasticsearch:elasticsearch ${elasticsearch_path}
    ln -sf ${elasticsearch_path}/bin/* /usr/bin/

    ulimit -n 65535
    echo "elasticsearch  -  nofile  65535" >>/etc/security/limits.conf

    swapoff -a
    sysctl -w vm.max_map_count=262144
}

Init_Elasticsearch() {
    version="8.9.0"
    wget -O /etc/init.d/elasticsearch ${download_Url}/src/elasticsearch/elasticsearch-init.sh
    chmod +x /etc/init.d/elasticsearch

    #    wget -O /www/server/elasticsearch/elasticsearch.env ${download_Url}/src/elasticsearch/elasticsearch.env

    wget -O /tmp/elasticsearch.service ${download_Url}/src/elasticsearch/elasticsearch.service
    mv /tmp/elasticsearch.service /usr/lib/systemd/system/elasticsearch.service

    mkdir -p ${plugin_path}
    AA_PANEL_CHECK=$(cat /www/server/panel/config/config.json|grep "English")
    if [ "${AA_PANEL_CHECK}" ];then
        wget -O ${plugin_path}/elasticsearch_main.py ${download_Url}/install/plugin/elasticsearch_en/elasticsearch_main.py
        wget -O ${plugin_path}/index.html ${download_Url}/install/plugin/elasticsearch_en/index.html
        wget -O ${plugin_path}/info.json ${download_Url}/install/plugin/elasticsearch_en/info.json
        wget -O ${plugin_path}/icon.png ${download_Url}/install/plugin/elasticsearch_en/icon.png
    else
        wget -O ${plugin_path}/elasticsearch_main.py ${download_Url}/install/plugin/elasticsearch/elasticsearch_main.py
        wget -O ${plugin_path}/index.html ${download_Url}/install/plugin/elasticsearch/index.html
        wget -O ${plugin_path}/info.json ${download_Url}/install/plugin/elasticsearch/info.json
        wget -O ${plugin_path}/icon.png ${download_Url}/install/plugin/elasticsearch/icon.png
    fi

    echo "正在启动Elasticsearch服务，请等待..."
    echo "Waiting for Elasticsearch to start..."

    systemctl daemon-reload
    sleep 1
    systemctl enable elasticsearch
    echo ""
    echo "正在启动Elasticsearch进程，预计还需要等待1分钟，请等待..."
    echo "Starting Elasticsearch Process..."
    sum=0
    while [ ${sum} -le 5 ]; do
        if [[ ! -f ${pid_path}/elasticsearch.pid ]] || [[ -z ${is_active} ]]; then
            if [[ sum -eq 1 ]]; then
                echo "启动可能遇到了问题，正在尝试重新启动，预计还需要再等待1分钟..."
            fi
            /etc/init.d/elasticsearch start >/dev/null 2>&1
            is_active=$(ps -ef | grep elasticsearch | grep -v grep)
        else
            break
        fi
        sleep 1
        sum=$(expr ${sum} + 1)
    done
    sleep 1

    echo "${version}" > /www/server/elasticsearch/version.pl
    password=$(elasticsearch-reset-password -a -b -s -u elastic)

    fingerprint=$(openssl x509 -fingerprint -sha256 -noout -in ${elasticsearch_path}/config/certs/http_ca.crt)
    fingerprint_part=$(echo "$fingerprint" | cut -d '=' -f 2)
    cleaned_fingerprint=$(echo "$fingerprint_part" | sed 's/://g')

    kibana_key=$(elasticsearch-create-enrollment-token -s kibana)

    json_dumps="{\"password\":\"${password}\",\"fingerprint\":\"${cleaned_fingerprint}\",\"kibana_key\":\"${kibana_key}\"}"
    echo ${json_dumps} >${elasticsearch_path}/config/elasticsearch.json

    Get_Ip_Address

    echo ""
    echo ""
    echo "==================================================================="
    echo ""
    echo "外网Elasticsearch地址: https://${getIpAddress}:9200"
    echo "内网Elasticsearch地址: https://${LOCAL_IP}:9200"
    echo "用户名: elastic"
    echo "密  码: ${password}"
    echo ""
    echo "HTTP CA SHA-256指纹: ${cleaned_fingerprint}"
    echo ""
    echo "Kibana连接密钥: ${kibana_key}"
    echo ""
    echo -e "\033[33m默认不开放外网访问，如需要请自行到防火墙/安全组放行9200端口\033[0m"
    echo -e "\033[33m建议您仅允许指定服务器访问Elasticsearch的9200端口\033[0m"
    echo ""
    echo "Elasticsearch已安装成功!"
    echo "Elasticsearch started successfully!"
    echo ""
    echo "==================================================================="
}

Uninstall_Elasticsearch() {
    pid=$(cat ${pid_path}/elasticsearch.pid)
    pkill -F ${pid_path}/elasticsearch.pid
    kill -9 ${pid}
    rm -rf /usr/bin/elasticsearch*
    rm -rf ${elasticsearch_path}
    rm -rf /etc/init.d/elasticsearch
    rm -rf ${plugin_path}

    server_file=/usr/lib/systemd/system/elasticsearch.service
    if [[ -f ${server_file} ]]; then
        systemctl stop elasticsearch
        systemctl disable elasticsearch
    fi
    systemctl daemon-reload
}

Install_Main() {
    Get_Public
    System_Lib
    Download_Lib
    Install_Elasticsearch
    Init_Elasticsearch
}
version=$2

if [ "${1}" == 'install' ]; then
    Install_Main ${version}
elif [ "${1}" == 'uninstall' ]; then
    Uninstall_Elasticsearch
fi
