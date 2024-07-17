#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH
install_tmp='/tmp/bt_install.pl'
public_file=/www/server/panel/install/public.sh
[ ! -f $public_file ] && wget -O $public_file http://node.aapanel.com/install/public.sh -T 5

publicFileMd5=$(md5sum ${public_file} | awk '{print $1}')
md5check="84cc939e9cda4405b6fb0c6f5bbc93b5"
[ "${publicFileMd5}" != "${md5check}" ] && wget -O $public_file http://node.aapanel.com/install/public.sh -T 5

. $public_file
download_Url=$NODE_URL
sysType=$(uname -a | grep x86_64)

if [ "${PM}" == "yum" ]; then
    Centos7Check=$(cat /etc/redhat-release | grep ' 7.' | grep -i centos)
    Centos8Check=$(cat /etc/redhat-release | grep ' 8' | grep -i centos)
    Centos9Check=$(cat /etc/redhat-release | grep ' 9' | grep -i centos)
    HEC_CHECK=$(cat /etc/os-release | grep "Huawei Cloud EulerOS 2.0")
    ALIBABAA_OS=$(cat /etc/redhat-release |grep Alibaba|grep 3)
    if [ "${Centos7Check}" ]; then
        OS_SYS="rhel"
        OS_VER="70"
    elif [ "${Centos8Check}" ] || [ "${HEC_CHECK}" ] || [ "${ALIBABAA_OS}" ]; then
        OS_SYS="rhel"
        OS_VER="80"
    elif [ "${Centos9Check}" ];then
        OS_SYS="rhel"
        OS_VER="90"
    fi
fi

if [ "${PM}" == "apt-get" ]; then
    UBUNTU_VER=$(cat /etc/issue | grep -i ubuntu | awk '{print $2}' | cut -d. -f1)
    DEBIAN_VER=$(cat /etc/issue | grep -i debian | awk '{print $3}')
    if [ "${UBUNTU_VER}" == "18" ] || [ "${UBUNTU_VER}" == "20" ] || [ "${UBUNTU_VER}" == "22" ]; then
        OS_SYS="ubuntu"
        OS_VER="${UBUNTU_VER}04"
    elif [ "${DEBIAN_VER}" == "10" ] || [ "${DEBIAN_VER}" == "11" ] || [ "${DEBIAN_VER}" == "12" ]; then
        OS_SYS="debian"
        OS_VER="${DEBIAN_VER}"
    fi
fi

mongodb_path=/www/server/mongodb
mongodb_tools_version="100.9.0"
mongodb_shell_version="2.0.2"
if [ "${OS_VER}" == "12" ];then
    mongodb_tools_version="100.9.4"
    mongodb_shell_version="2.2.3"
fi


if [ -z "${OS_VER}" ] && [ "$1" == "install" ]; then
    echo -e "您当前的服务器系统版本不在兼容范围，请使用主流的服务器版本安装使用。例如: Centos、Debian、Ubuntu系统"
    exit
fi

check_avx() {
    if [ "${mongodb_version}" == "6.0.10" ] || [ "${mongodb_version}" == "7.0.8" ]; then
        check_avx=$(grep -o avx /proc/cpuinfo)
        if [[ -z ${check_avx} ]]; then
            echo "当前服务器系统CPU不支持AVX指令集无法安装mongodb-6.x或7.x，请安装mongodb-4.x版本"
            exit 1
        fi
    fi
}

Service_Add() {
    if [ "${PM}" == "yum" ] || [ "${PM}" == "dnf" ]; then
        chkconfig --add mongodb
        chkconfig --level 2345 mongodb on
    elif [ "${PM}" == "apt-get" ]; then
        update-rc.d mongodb defaults
    fi
}

Service_Del() {
    if [ "${PM}" == "yum" ] || [ "${PM}" == "dnf" ]; then
        chkconfig --del mongodb
    elif [ "${PM}" == "apt-get" ]; then
        update-rc.d mongodb remove
    fi
}

Install_Mongodb() {
    mongo_user=$(id -u mongo 2>/dev/null)
    if [ "$?" -ne 0 ]; then
        groupadd mongo
        useradd -s /sbin/nologin -M -g mongo mongo
    fi

    if [ "${mongodb_version}" == "4.0.10" ]; then
        wget -O mongodb-linux-x86_64-${mongodb_version}.tgz $download_Url/src/mongodb-linux-x86_64-${mongodb_version}.tgz -T 5
        tar zxvf mongodb-linux-x86_64-${mongodb_version}.tgz
        mkdir -p $mongodb_path/data
        mkdir -p $mongodb_path/log
        \cp -a -r mongodb-linux-x86_64-${mongodb_version}/bin $mongodb_path/
        rm -rf mongodb-linux-x86_64-${mongodb_version}*

        wget -O mongodb-database-tools-${OS_SYS}${OS_VER}-x86_64-${mongodb_tools_version}.tgz $download_Url/src/mongodb-database-tools-${OS_SYS}${OS_VER}-x86_64-${mongodb_tools_version}.tgz
        tar -xvf mongodb-database-tools-${OS_SYS}${OS_VER}-x86_64-${mongodb_tools_version}.tgz
        \cp -rpa mongodb-database-tools-${OS_SYS}${OS_VER}-x86_64-${mongodb_tools_version}/bin/* $mongodb_path/bin
        rm -rf mongodb-database-tools-${OS_SYS}${OS_VER}-x86_64-${mongodb_tools_version}*

        chmod +x $mongodb_path/bin
        ln -sf $mongodb_path/bin/* /usr/bin/
        echo "${mongodb_version}" >${mongodb_path}/version.pl
        echo "${mongodb_version}" >${mongodb_path}/version_check.pl

    elif [ "${mongodb_version}" == "4.4.6" ]; then
        if [ "${DEBIAN_VER}" != "11" ]; then
            wget -O mongodb-linux-x86_64-${OS_SYS}${OS_VER}-${mongodb_version}.tgz $download_Url/src/mongodb-linux-x86_64-${OS_SYS}${OS_VER}-${mongodb_version}.tgz -T 5
            tar zxvf mongodb-linux-x86_64-${OS_SYS}${OS_VER}-${mongodb_version}.tgz
            mkdir -p $mongodb_path/data
            mkdir -p $mongodb_path/log
            \cp -a -r mongodb-linux-x86_64-${OS_SYS}${OS_VER}-${mongodb_version}/bin $mongodb_path/
            rm -rf mongodb-linux-x86_64-${OS_SYS}${OS_VER}-${mongodb_version}*

            wget -O mongodb-database-tools-${OS_SYS}${OS_VER}-x86_64-${mongodb_tools_version}.tgz $download_Url/src/mongodb-database-tools-${OS_SYS}${OS_VER}-x86_64-${mongodb_tools_version}.tgz
            tar -xvf mongodb-database-tools-${OS_SYS}${OS_VER}-x86_64-${mongodb_tools_version}.tgz
            \cp -rpa mongodb-database-tools-${OS_SYS}${OS_VER}-x86_64-${mongodb_tools_version}/bin/* $mongodb_path/bin
            rm -rf mongodb-database-tools-${OS_SYS}${OS_VER}-x86_64-${mongodb_tools_version}*

            chmod +x $mongodb_path/bin
            ln -sf $mongodb_path/bin/* /usr/bin/
            echo "${mongodb_version}" >${mongodb_path}/version.pl
            echo "${mongodb_version}" >${mongodb_path}/version_check.pl
        else
            echo "Mongodb安装失败,Mongodb 4.4.6不支持Debian 11系统版本，请安装其他版本。"
            exit 0
        fi

    elif [ "${mongodb_version}" == "6.0.10" ]; then
        wget -O mongodb-linux-x86_64-${OS_SYS}${OS_VER}-${mongodb_version}.tgz $download_Url/src/mongodb-linux-x86_64-${OS_SYS}${OS_VER}-${mongodb_version}.tgz -T 5
        tar zxvf mongodb-linux-x86_64-${OS_SYS}${OS_VER}-${mongodb_version}.tgz
        mkdir -p $mongodb_path/data
        mkdir -p $mongodb_path/log
        \cp -a -r mongodb-linux-x86_64-${OS_SYS}${OS_VER}-${mongodb_version}/bin $mongodb_path/
        rm -rf mongodb-linux-x86_64-${OS_SYS}${OS_VER}-${mongodb_version}*

        wget -O mongodb-database-tools-${OS_SYS}${OS_VER}-x86_64-${mongodb_tools_version}.tgz $download_Url/src/mongodb-database-tools-${OS_SYS}${OS_VER}-x86_64-${mongodb_tools_version}.tgz
        tar -xvf mongodb-database-tools-${OS_SYS}${OS_VER}-x86_64-${mongodb_tools_version}.tgz
        \cp -rpa mongodb-database-tools-${OS_SYS}${OS_VER}-x86_64-${mongodb_tools_version}/bin/* $mongodb_path/bin
        rm -rf mongodb-database-tools-${OS_SYS}${OS_VER}-x86_64-${mongodb_tools_version}*

        wget -O mongosh-${mongodb_shell_version}-linux-x64.tgz $download_Url/src/mongosh-${mongodb_shell_version}-linux-x64.tgz
        tar -zxvf mongosh-${mongodb_shell_version}-linux-x64.tgz
        mkdir -p $mongodb_path/mongo_shell
        \cp -a -r mongosh-${mongodb_shell_version}-linux-x64/bin/mongosh $mongodb_path/bin
        rm -rf mongosh-${mongodb_shell_version}*

        chmod +x $mongodb_path/bin
        ln -sf mongos-${mongodb_shell_version}-linux-x64/bin/mongosh_crypt_v1.so /usr/lib
        ln -sf $mongodb_path/bin/* /usr/bin/

        echo "${mongodb_version}" >${mongodb_path}/version.pl
        echo "${mongodb_version}" >${mongodb_path}/version_check.pl

    elif [ "${mongodb_version}" == "7.0.8" ]; then
        wget -O mongodb-linux-x86_64-${OS_SYS}${OS_VER}-${mongodb_version}.tgz $download_Url/src/mongodb-linux-x86_64-${OS_SYS}${OS_VER}-${mongodb_version}.tgz -T 5
        tar zxvf mongodb-linux-x86_64-${OS_SYS}${OS_VER}-${mongodb_version}.tgz
        mkdir -p $mongodb_path/data
        mkdir -p $mongodb_path/log
        \cp -a -r mongodb-linux-x86_64-${OS_SYS}${OS_VER}-${mongodb_version}/bin $mongodb_path/
        rm -rf mongodb-linux-x86_64-${OS_SYS}${OS_VER}-${mongodb_version}*

        wget -O mongodb-database-tools-${OS_SYS}${OS_VER}-x86_64-${mongodb_tools_version}.tgz $download_Url/src/mongodb-database-tools-${OS_SYS}${OS_VER}-x86_64-${mongodb_tools_version}.tgz
        tar -xvf mongodb-database-tools-${OS_SYS}${OS_VER}-x86_64-${mongodb_tools_version}.tgz
        \cp -rpa mongodb-database-tools-${OS_SYS}${OS_VER}-x86_64-${mongodb_tools_version}/bin/* $mongodb_path/bin
        rm -rf mongodb-database-tools-${OS_SYS}${OS_VER}-x86_64-${mongodb_tools_version}*

        wget -O mongosh-${mongodb_shell_version}-linux-x64.tgz $download_Url/src/mongosh-${mongodb_shell_version}-linux-x64.tgz
        tar -zxvf mongosh-${mongodb_shell_version}-linux-x64.tgz
        mkdir -p $mongodb_path/mongo_shell
        \cp -a -r mongosh-${mongodb_shell_version}-linux-x64/bin/mongosh $mongodb_path/bin
        rm -rf mongosh-${mongodb_shell_version}*

        chmod +x $mongodb_path/bin
        ln -sf mongos-${mongodb_shell_version}-linux-x64/bin/mongosh_crypt_v1.so /usr/lib
        ln -sf $mongodb_path/bin/* /usr/bin/

        echo "${mongodb_version}" >${mongodb_path}/version.pl
        echo "${mongodb_version}" >${mongodb_path}/version_check.pl
    else
        echo "Mongodb安装失败，Mongodb 4.4.4/4.4.6暂时不支持Debian 11系统版本。"
        exit 0
    fi

    wget -O /etc/init.d/mongodb $download_Url/install/lib/plugin/mongodb/mongodb.init -T 5
    wget -O $mongodb_path/config.conf $download_Url/install/lib/plugin/mongodb/config.conf -T 5
    chmod +x /etc/init.d/mongodb
    chown -R mongo:mongo $mongodb_path
    if [ "${mongodb_version}" == "7.0.8" ]; then
        sed -i '/^\s*journal:/,/\s*enabled:\s*true$/d' $mongodb_path/config.conf
        /etc/init.d/mongodb start
    else
        /etc/init.d/mongodb start
    fi
}

Install_plugin() {
    mkdir -p /www/server/panel/plugin/mongodb
    echo '正在安装脚本文件...' >$install_tmp
    grep "English" /www/server/panel/config/config.json
    if [ "$?" -ne 0 ]; then
        wget -O /www/server/panel/plugin/mongodb/mongodb_main.py $download_Url/install/plugin/mongodb/mongodb_main.py -T 5
        wget -O /www/server/panel/plugin/mongodb/index.html $download_Url/install/plugin/mongodb/index.html -T 5
        wget -O /www/server/panel/plugin/mongodb/info.json $download_Url/install/plugin/mongodb/info.json -T 5
        wget -O /www/server/panel/plugin/mongodb/icon.png $download_Url/install/plugin/mongodb/icon.png -T 5
    else
        wget -O /www/server/panel/plugin/mongodb/mongodb_main.py $download_Url/install/plugin/mongodb_en/mongodb_main.py -T 5
        wget -O /www/server/panel/plugin/mongodb/index.html $download_Url/install/plugin/mongodb_en/index.html -T 5
        wget -O /www/server/panel/plugin/mongodb/info.json $download_Url/install/plugin/mongodb_en/info.json -T 5
        wget -O /www/server/panel/plugin/mongodb/icon.png $download_Url/install/plugin/mongodb_en/icon.png -T 5
    fi

    \cp -a -r /www/server/panel/plugin/mongodb/icon.png /www/server/panel/static/img/soft_ico/ico-mongodb.png
    echo "${mongodb_version}" >/www/server/panel/plugin/mongodb/version.pl
    echo "${mongodb_version}" >/www/server/panel/plugin/mongodb/version_check.pl
    echo '安装完成' >$install_tmp
}

Uninstall_mongodb() {
    mongodb_path=/www/server/mongodb
    /etc/init.d/mongodb stop
    rm -f /etc/init.d/mongodb
    rm -f /usr/bin/mongo*
    rm -f /usr/bin/bsondump /usr/bin/install_compass
    rm -rf $mongodb_path/bin
    rm -rf $mongodb_path/log
    rm -f /usr/lib/mongosh_crypt_v1.so
    rm -rf /www/server/panel/plugin/mongodb
}

Bt_Check() {
    checkFile="/www/server/panel/install/check.sh"
    wget -O ${checkFile} ${download_Url}/tools/check.sh
    . ${checkFile}
}

actionType=$1
version=$2

if [ "${actionType}" == 'install' ]; then
    if [ -z "${version}" ]; then
        exit
    fi

    case "${version}" in
    '4.0')
        mongodb_version='4.0.10'
        ;;
    '4.4')
        mongodb_version='4.4.6'
        ;;
    '6.0')
        mongodb_version='6.0.10'
        ;;
    '7.0')
        mongodb_version='7.0.8'
        ;;
    esac
    check_avx
    Install_Mongodb
    Install_plugin
    Bt_Check
    Service_Add
elif [ "${actionType}" == 'update' ]; then
    Install_plugin
    echo "请到Mongodb插件设置进行版本切换！"
elif [ "${actionType}" == 'uninstall' ]; then
    Uninstall_mongodb
    Service_Del
fi
