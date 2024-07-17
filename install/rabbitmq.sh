#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH
LANG=en_US.UTF-8

setup_path="/www"
plugin_path="${setup_path}/server/panel/plugin/rabbitmq"

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

Get_Sysinfo() {
    os_id=$(
        . /etc/os-release
        echo ${ID}
    )

    if [[ ${os_id} == "ubuntu" ]] || [[ ${os_id} == "debian" ]]; then
        distribution=$(
            . /etc/os-release
            echo ${VERSION_CODENAME}
        )
        arch_type="amd64"
        pack_type="deb"
    else
        distribution=$(
            . /etc/os-release
            echo ${VERSION_ID}
        )
        arch_type="x86_64"
        pack_type="rpm"
    fi
}

Download_Packs() {
    esl_pack_name="esl-erlang_26.0.2-1~${os_id}~${distribution}_${arch_type}.${pack_type}"
    rabbitmq_pack_name="rabbitmq-server_3.12.4-1_all.${pack_type}"
    if [[ ! -f /tmp/${esl_pack_name} ]]; then
        wget -O /tmp/${esl_pack_name} ${download_Url}/install/plugin/rabbitmq/${esl_pack_name} -T 20
    fi

    if [[ ! -f /tmp/${rabbitmq_pack_name} ]]; then
        wget -O /tmp/${rabbitmq_pack_name} ${download_Url}/install/plugin/rabbitmq/${rabbitmq_pack_name} -T 20
    fi
}

Install_Packs() {
    if [[ ${pack_type} == "deb" ]]; then
        dpkg -i --force-depends /tmp/${esl_pack_name}
        dpkg -i --force-depends /tmp/${rabbitmq_pack_name}
    else
        rpm -ivh /tmp/${esl_pack_name}
        rpm -ivh /tmp/${rabbitmq_pack_name}
    fi

    rm -rf /tmp/${esl_pack_name}
    rm -rf /tmp/${rabbitmq_pack_name}
}

Set_Config() {
    rabbitmq_conf_json="${plugin_path}/rabbitmq_conf.json"
    rabbitmq_user="admin"
    rabbitmq_pass=$(cat /dev/urandom | head -1 | md5sum | head -c 8)

    if [[ ! -f ${plugin_path}/rabbitmq_conf.json ]]; then
        touch ${plugin_path}/rabbitmq_conf.json
    fi
    echo "{\"username\":\"${rabbitmq_user}\",\"password\":\"${rabbitmq_pass}\"}" >${rabbitmq_conf_json}

    rabbitmq-plugins enable rabbitmq_management

    rabbitmqctl add_user ${rabbitmq_user} ${rabbitmq_pass}
    rabbitmqctl set_user_tags ${rabbitmq_user} administrator
    rabbitmqctl set_permissions -p / ${rabbitmq_user} ".*" ".*" ".*"
}

Start_Rabbitmq() {
    systemctl start rabbitmq-server
}

Install_Plugin() {
    AA_PANEL_CHECK=$(cat /www/server/panel/config/config.json|grep "English")
    mkdir -p ${plugin_path}
	  if [ "${AA_PANEL_CHECK}" ];then
        wget -O ${plugin_path}/rabbitmq_main.py ${download_Url}/install/plugin/rabbitmq_en/rabbitmq_main.py
        wget -O ${plugin_path}/index.html ${download_Url}/install/plugin/rabbitmq_en/index.html
        wget -O ${plugin_path}/info.json ${download_Url}/install/plugin/rabbitmq_en/info.json
        wget -O ${plugin_path}/icon.png ${download_Url}/install/plugin/rabbitmq_en/icon.png
        wget -O ${plugin_path}/version.pl ${download_Url}/install/plugin/rabbitmq_en/version.pl
    else
        wget -O ${plugin_path}/rabbitmq_main.py ${download_Url}/install/plugin/rabbitmq/rabbitmq_main.py
        wget -O ${plugin_path}/index.html ${download_Url}/install/plugin/rabbitmq/index.html
        wget -O ${plugin_path}/info.json ${download_Url}/install/plugin/rabbitmq/info.json
        wget -O ${plugin_path}/icon.png ${download_Url}/install/plugin/rabbitmq/icon.png
        wget -O ${plugin_path}/version.pl ${download_Url}/install/plugin/rabbitmq/version.pl
    fi

    if [[ ! -f ${plugin_path}/version.pl ]]; then
        touch ${plugin_path}/version.pl
        echo "3.12.4" > ${plugin_path}/version.pl
    fi
}

Uninstall_Plugin() {
    Get_Sysinfo
    if [[ ${pack_type} == "deb" ]]; then
        dpkg -P esl-erlang
        dpkg -P rabbitmq-server
    else
        rpm -e esl-erlang
        rpm -e rabbitmq-server
    fi

    rm -rf ${plugin_path}

    rabbitmqctl stop
    systemctl stop rabbitmq-server
}

Install_Main() {
    Get_Public
    Get_Sysinfo
    Download_Packs
    Install_Plugin
    Install_Packs
    Set_Config
    Start_Rabbitmq
}

if [[ $1 == "install" ]]; then
    Install_Main
elif [[ $1 == "uninstall" ]]; then
    Uninstall_Plugin
fi