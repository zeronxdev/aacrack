#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

public_file=/www/server/panel/install/public.sh
. $public_file
publicFileMd5=$(md5sum ${public_file} 2>/dev/null|awk '{print $1}')
md5check="3a4b75cd48e16fcdf2945e41598da6bd"
if [ "${publicFileMd5}" != "${md5check}"  ] && [ -z "${NODE_URL}" ]; then
	wget -O Tpublic.sh https://node.aapanel.com/install/public.sh -T 20;
	publicFileMd5=$(md5sum Tpublic.sh 2>/dev/null|awk '{print $1}')
	if [ "${publicFileMd5}" == "${md5check}"  ]; then
		\cp -rpa Tpublic.sh $public_file
	fi
	rm -f Tpublic.sh
	. $public_file
fi

download_Url=$NODE_URL

Root_Path=`cat /var/bt_setupPath.conf`
Setup_Path=$Root_Path/server/mysql
Data_Path=$Root_Path/server/data
Is_64bit=`getconf LONG_BIT`
run_path='/root'
mysql_51='5.1.73'
mysql_55='5.5.62'
mysql_56='5.6.50'
mysql_57='5.7.44'
mysql_80='8.0.36'
mysql_84='8.4.0'
mariadb_55='5.5.55'
mysql_mariadb_100='10.0.38'
mysql_mariadb_101='10.1.47'
mysql_mariadb_102='10.2.38'
mysql_mariadb_103='10.3.39'
mysql_mariadb_104='10.4.32'
mysql_mariadb_105='10.5.23'
mysql_mariadb_106='10.6.16'
mysql_mariadb_107='10.7.3'
mysql_mariadb_108='10.8.2'
mysql_mariadb_1011='10.11.6'
mysql_mariadb_113='11.3.2'
alisql_version='AliSQL-5.6.32'
Centos7Check=$(cat /etc/redhat-release | grep ' 7.' | grep -iE 'centos')
Centos8Check=$(cat /etc/redhat-release | grep ' 8.' | grep -iE 'centos|Red Hat')
CentosStream8Check=$(cat /etc/redhat-release |grep -i "Centos Stream"|grep 8)
Centos9Check=$(cat /etc/redhat-release | grep ' 9.')
ky10Check=$(rpm -aq|grep ky10.loongarch64)
ky1086Check=$(rpm -aq|grep ky10.x86_64)

if [ "${ky10Check}" ];then
    yum install libtirpc-devel.loongarch64 -y
fi

if [ "${ky1086Check}" ];then
    yum install libtirpc-devel.x86_64 -y
fi

if [ "${Centos9Check}" ];then 
    dnf --enablerepo=crb install libtirpc-devel -y
fi 

if [ -z "${cpuCore}" ]; then
    cpuCore="1"
fi

DEBIAN_12_C=$(cat /etc/issue|grep Debian|grep 12)
UBUNTU_22_C=$(cat /etc/issue|grep Ubuntu|grep 22)
EL9_CHECK=$(uname -a|grep el9.x86)
if [ "${DEBIAN_12_C}" ] || [ "${UBUNTU_22_C}" ] || [ "${EL9_CHECK}" ];then
    if [ "${2}" == "5.1" ] || [ "${2}" == "5.6" ] || [ "${2}" == "alisql" ];then
        echo "============================================================================"
        echo "${DEBIAN_12_C}${UBUNTU_22_C}${EL9_CHECK}系统不支持安装mysql-${2}"
        echo "请选择安装mysql-5.5/5.7/8.0!"
        exit 1
    fi
fi
UBUNTU_24=$(cat /etc/issue|grep Ubuntu|grep 24)
if [ "${UBUNTU_24}" ];then
    apt-get install libtirpc-dev -y
fi

MEM_INFO=$(free -m|grep Mem|awk '{printf("%.f",($2)/1024)}')
if [ "${cpuCore}" != "1" ] && [ "${MEM_INFO}" != "0" ];then
    if [ "${cpuCore}" -gt "${MEM_INFO}" ];then
        cpuCore="${MEM_INFO}"
    fi
else
    cpuCore="1"
fi

#检测hosts文件
hostfile=`cat /etc/hosts | grep 127.0.0.1 | grep localhost`
if [ "${hostfile}" = '' ]; then
    echo "127.0.0.1  localhost  localhost.localdomain" >> /etc/hosts
fi

Error_Send(){
    MIN_O=$(date +%M)
    if [ $((MIN_O % 2)) -eq 0 ]; then
        exit 1
    fi
    if [ ! -f "/tmp/mysql_i.pl" ];then
        touch /tmp/mysql_i.pl
        TIME=$(date "+%Y-%m-%d %H:%M:%S")
        P_VERSION=$(cat /www/server/panel/class/common.py|grep g.version|grep -oE 8.0.[0-9]+)
        ls /etc/init.d/ | xargs -n 5 | pr -t -5 > /tmp/mysql_err.pl
        tail -n 25 /tmp/mysql_config.pl /tmp/mysql_make.pl  >> /tmp/mysql_err.pl
        echo  Bit:${SYS_BIT} Mem:${MEM_TOTAL}M Core:${CPU_INFO} gcc:${GCC_VER} cmake:${CMAKE_VER} >> /tmp/mysql_err.pl
        echo ${SYS_VERSION} ${SYS_INFO} >> /tmp/mysql_err.pl
        echo "$sqlVersion install Failed" >> /tmp/mysql_err.pl
        ERR_MSG=$(cat /tmp/mysql_err.pl)
        rm -f /tmp/mysql_config.pl /tmp/mysql_make.pl /tmp/mysql_install.pl /tmp/mysql_err.pl
        curl --request POST \
          --url "http://api.bt.cn/bt_error/index.php" \
          --data "UID=89045" \
          --data "PANEL_VERSION=${P_VERSION}"\
          --data "REQUEST_DATE=${TIME}" \
          --data "OS_VERSION=${SYS_VERSION}" \
          --data "REMOTE_ADDR=192.168.168.1641" \
          --data "REQUEST_URI=mysql" \
          --data "USER_AGENT=${SYS_INFO}" \
          --data "ERROR_INFO=${ERR_MSG}" \
          --data "PACK_TIME=${TIME}" \
          --data "TYPE=3"
    fi
    exit 1
}

Mem_Check(){
    MEM_MB=$(free -m | grep Mem | awk '{print $7}')
    MIN_MEM=0

    Check_Memory() {
        if [ "${MEM_MB}" -lt "${MIN_MEM}" ]; then
            if [ ! -f "$1" ]; then
                echo "============================================================================"
                echo "检测到当前空闲内存为${MEM_MB}MB, ${2}至少需要 ${MIN_MEM}MB 空闲内存才可以进行${3}"
                echo "请尝试在面板首页中释放内存后再尝试${3}"
                echo "如内存仍不足,可执行以下命令后尝试${3},将会跳过内存验证,强制${3}"
                echo "命令：touch $1"
                echo "注：强制${3}将可能导致服务器异常，请做好备份！"
                if [ "$3" == "安装" ];then
                    echo "部分系统不支持极速安装，仅支持编译安装，如出现使用极速安装提示上面的提醒"
                    echo "建议更换 CentOS-7/Ubuntu-22/Debian-12 进行极速安装"
                fi
                exit 1
            else
                rm -f "$1"
            fi
        fi
    }

    if [ "${actionType}" == "update" ]; then
        if [ "${version}" == "8.0" ]; then
            MIN_MEM=5192
            Check_Memory "/www/server/panel/install/u_mysql.pl" "升级 MySQL" "升级"
        elif [ "${version}" == "5.7" ]; then
            MIN_MEM=2000
            Check_Memory "/www/server/panel/install/u_mysql.pl" "升级 MySQL" "升级"
        fi
    elif [ "${actionType}" == "install" ]; then
        if [ "${version}" == "5.7" ]; then
            MIN_MEM=1560
            Check_Memory "/www/server/panel/install/i_mysql.pl" "编译安装 MySQL-5.7" "安装"
        elif [ "${version}" == "8.0" ]; then
            MIN_MEM=4096
            Check_Memory "/www/server/panel/install/i_mysql.pl" "编译安装 MySQL-8.0" "安装"
        fi
    fi
}
System_Lib(){
    if [ "${PM}" == "yum" ] || [ "${PM}" == "dnf" ] ; then
        Pack="cmake libarchive"
        ${PM} install ${Pack} -y
        yum install libuv openldap-devel -y
    elif [ "${PM}" == "apt-get" ]; then
        Pack="cmake"
        ${PM} install ${Pack} -y
    fi
}

gccVersionCheck(){
    gccV=$(gcc -dumpversion|grep ^[789])
    if [ "${gccV}" ]; then
        sed -i "s/field_names\[i\]\[num_fields\*2\].*/field_names\[i\]\[num_fields\*2\]= NULL;/" client/mysql.cc
    fi
}

Service_Add(){
    if [ "${PM}" == "yum" ] || [ "${PM}" == "dnf" ]; then
        chkconfig --add mysqld
        chkconfig --level 2345 mysqld on
    elif [ "${PM}" == "apt-get" ]; then
        update-rc.d mysqld defaults
    fi 
}
Service_Del(){
     if [ "${PM}" == "yum" ] || [ "${PM}" == "dnf" ]; then
        chkconfig --del mysqld
        chkconfig --level 2345 mysqld off
    elif [ "${PM}" == "apt-get" ]; then
        update-rc.d mysqld remove
    fi
}

printVersion(){
    if [ "${version}" = "alisql" ];then
        echo "${alisql_version}" > ${Setup_Path}/version.pl
    elif [ "${GREATSQL_VER}" ];then
    	echo "greatsql_${GREATSQL_VER}" > ${Setup_Path}/version.pl
    	echo "greatsql_${GREATSQL_VER}" > ${Setup_Path}/version_check.pl
    elif [ -z "${mariadbCheck}" ]; then
        echo "${sqlVersion}" > ${Setup_Path}/version.pl
    else
        echo "mariadb_${sqlVersion}" > ${Setup_Path}/version.pl
    fi
}
Install_Rpcgen(){
    if [ ! -f "/usr/bin/rpcgen" ];then
        wget ${download_Url}/src/rpcsvc-proto-1.4.tar.gz 
        tar -xvf rpcsvc-proto-1.4.tar.gz
        cd rpcsvc-proto-1.4
        ./configure --prefix=/usr/local/rpcgen
        make
        make install
        ln -sf /usr/local/rpcgen/bin/rpcgen /usr/bin/rpcgen
        cd ..
        rm -rf rpcsvc-proto*
    fi
}
Install_Openssl111(){
    opensslCheck=$(/usr/local/openssl111/bin/openssl version|grep 1.1.1)
    if [ -z "${opensslCheck}" ]; then
        opensslVersion="1.1.1o"
        cd ${run_path}
        wget ${download_Url}/src/openssl-${opensslVersion}.tar.gz -T 20
        tar -zxf openssl-${opensslVersion}.tar.gz
        rm -f openssl-${opensslVersion}.tar.gz
        cd openssl-${opensslVersion}
        ./config --prefix=/usr/local/openssl111 zlib-dynamic
        make -j${cpuCore}
        make install
        echo "/usr/local/openssl111/lib" >> /etc/ld.so.conf.d/openssl111.conf
        ldconfig
        cd ..
        rm -rf openssl-${opensslVersion}
    fi
    WITH_SSL="-DWITH_SSL=/usr/local/openssl111"
}
Setup_Mysql_PyDb(){
    pyMysql=$1
    pyMysqlVer=$2

    wget -O src.zip ${download_Url}/install/src/${pyMysql}-${pyMysqlVer}.zip -T 20
    unzip src.zip
    mv ${pyMysql}-${pyMysqlVer} src
    cd src
    python setup.py install
    cd ..
    rm -f src.zip
    rm -rf src 
    /etc/init.d/bt reload

}
Install_Mysql_PyDb(){
    pip uninstall MySQL-python mysqlclient PyMySQL -y
    pipUrl=$(cat /root/.pip/pip.conf|awk 'NR==2 {print $3}')
    [ "${pipUrl}" ] && checkPip=$(curl --connect-timeout 5 --head -s -o /dev/null -w %{http_code} ${pipUrl})
    pyVersion=$(python -V 2>&1|awk '{printf ("%d",$2)}')
    if [ "${pyVersion}" == "2" ];then
        if [ -f "${Setup_Path}/mysqlDb3.pl" ]; then
            local pyMysql="mysqlclient"
            local pyMysqlVer="1.3.12"
        else
            local pyMysql="MySQL-python"
            local pyMysqlVer="1.2.5"
        fi 
        if [ "${checkPip}" = "200" ];then
            pip install ${pyMysql}
        else
            Setup_Mysql_PyDb ${pyMysql} ${pyMysqlVer}
        fi
    fi	
    
    if [ "${checkPip}" = "200" ];then
        pip install PyMySQL
    else
        Setup_Mysql_PyDb "PyMySQL" "0.9.3"
    fi
}

Drop_Test_Databashes(){
    sleep 1
    /etc/init.d/mysqld stop
    pkill -9 mysqld_safe
    pkill -9 mysql
    sleep 1
    /etc/init.d/mysqld start
    sleep 1
    /www/server/mysql/bin/mysql -uroot -p$mysqlpwd -e "drop database test";
    /www/server/mysql/bin/mysql -uroot -p$mysqlpwd -e "delete from mysql.user where user='';"
    /www/server/mysql/bin/mysql -uroot -p$mysqlpwd -e "flush privileges;"

}
#设置软件链
SetLink()
{
    ln -sf ${Setup_Path}/bin/mysql /usr/bin/mysql
    ln -sf ${Setup_Path}/bin/mysqldump /usr/bin/mysqldump
    ln -sf ${Setup_Path}/bin/myisamchk /usr/bin/myisamchk
    ln -sf ${Setup_Path}/bin/mysqld_safe /usr/bin/mysqld_safe
    ln -sf ${Setup_Path}/bin/mysqlcheck /usr/bin/mysqlcheck
    ln -sf ${Setup_Path}/bin/mysql_config /usr/bin/mysql_config
    
    rm -f /usr/lib/libmysqlclient.so.16
    rm -f /usr/lib64/libmysqlclient.so.16
    rm -f /usr/lib/libmysqlclient.so.18
    rm -f /usr/lib64/libmysqlclient.so.18
    rm -f /usr/lib/libmysqlclient.so.20
    rm -f /usr/lib64/libmysqlclient.so.20
    rm -f /usr/lib/libmysqlclient.so.21
    rm -f /usr/lib64/libmysqlclient.so.21
    
    if [ -f "${Setup_Path}/lib/libmysqlclient.so.18" ];then
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.18 /usr/lib/libmysqlclient.so.16
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.18 /usr/lib64/libmysqlclient.so.16
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.18 /usr/lib/libmysqlclient.so.18
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.18 /usr/lib64/libmysqlclient.so.18
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.18 /usr/lib/libmysqlclient.so.20
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.18 /usr/lib64/libmysqlclient.so.20
    elif [ -f "${Setup_Path}/lib/mysql/libmysqlclient.so.18" ];then
        ln -sf ${Setup_Path}/lib/mysql/libmysqlclient.so.18 /usr/lib/libmysqlclient.so.16
        ln -sf ${Setup_Path}/lib/mysql/libmysqlclient.so.18 /usr/lib64/libmysqlclient.so.16
        ln -sf ${Setup_Path}/lib/mysql/libmysqlclient.so.18 /usr/lib/libmysqlclient.so.18
        ln -sf ${Setup_Path}/lib/mysql/libmysqlclient.so.18 /usr/lib64/libmysqlclient.so.18
        ln -sf ${Setup_Path}/lib/mysql/libmysqlclient.so.18 /usr/lib/libmysqlclient.so.20
        ln -sf ${Setup_Path}/lib/mysql/libmysqlclient.so.18 /usr/lib64/libmysqlclient.so.20
    elif [ -f "${Setup_Path}/lib/libmysqlclient.so.16" ];then
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.16 /usr/lib/libmysqlclient.so.16
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.16 /usr/lib64/libmysqlclient.so.16
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.16 /usr/lib/libmysqlclient.so.18
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.16 /usr/lib64/libmysqlclient.so.18
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.16 /usr/lib/libmysqlclient.so.20
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.16 /usr/lib64/libmysqlclient.so.20
    elif [ -f "${Setup_Path}/lib/mysql/libmysqlclient.so.16" ];then
        ln -sf ${Setup_Path}/lib/mysql/libmysqlclient.so.16 /usr/lib/libmysqlclient.so.16
        ln -sf ${Setup_Path}/lib/mysql/libmysqlclient.so.16 /usr/lib64/libmysqlclient.so.16
        ln -sf ${Setup_Path}/lib/mysql/libmysqlclient.so.16 /usr/lib/libmysqlclient.so.18
        ln -sf ${Setup_Path}/lib/mysql/libmysqlclient.so.16 /usr/lib64/libmysqlclient.so.18
        ln -sf ${Setup_Path}/lib/mysql/libmysqlclient.so.16 /usr/lib/libmysqlclient.so.20
        ln -sf ${Setup_Path}/lib/mysql/libmysqlclient.so.16 /usr/lib64/libmysqlclient.so.20
    elif [ -f "${Setup_Path}/lib/libmysqlclient_r.so.16" ];then
        ln -sf ${Setup_Path}/lib/libmysqlclient_r.so.16 /usr/lib/libmysqlclient_r.so.16
        ln -sf ${Setup_Path}/lib/libmysqlclient_r.so.16 /usr/lib64/libmysqlclient_r.so.16
    elif [ -f "${Setup_Path}/lib/mysql/libmysqlclient_r.so.16" ];then
        ln -sf ${Setup_Path}/lib/mysql/libmysqlclient_r.so.16 /usr/lib/libmysqlclient_r.so.16
        ln -sf ${Setup_Path}/lib/mysql/libmysqlclient_r.so.16 /usr/lib64/libmysqlclient_r.so.16
    elif [ -f "${Setup_Path}/lib/libmysqlclient.so.20" ];then
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.20 /usr/lib/libmysqlclient.so.16
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.20 /usr/lib64/libmysqlclient.so.16
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.20 /usr/lib/libmysqlclient.so.18
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.20 /usr/lib64/libmysqlclient.so.18
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.20 /usr/lib/libmysqlclient.so.20
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.20 /usr/lib64/libmysqlclient.so.20
    elif [ -f "${Setup_Path}/lib/libmysqlclient.so.21" ];then
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.21 /usr/lib/libmysqlclient.so.16
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.21 /usr/lib64/libmysqlclient.so.16
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.21 /usr/lib/libmysqlclient.so.18
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.21 /usr/lib64/libmysqlclient.so.18
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.21 /usr/lib/libmysqlclient.so.20
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.21 /usr/lib64/libmysqlclient.so.20
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.21 /usr/lib/libmysqlclient.so.21
        ln -sf ${Setup_Path}/lib/libmysqlclient.so.21 /usr/lib64/libmysqlclient.so.21
    elif [ -f "${Setup_Path}/lib/libmariadb.so.3" ]; then
        ln -sf ${Setup_Path}/lib/libmariadb.so.3 /usr/lib/libmysqlclient.so.16
        ln -sf ${Setup_Path}/lib/libmariadb.so.3 /usr/lib64/libmysqlclient.so.16
        ln -sf ${Setup_Path}/lib/libmariadb.so.3 /usr/lib/libmysqlclient.so.18
        ln -sf ${Setup_Path}/lib/libmariadb.so.3 /usr/lib64/libmysqlclient.so.18
        ln -sf ${Setup_Path}/lib/libmariadb.so.3 /usr/lib/libmysqlclient.so.20
        ln -sf ${Setup_Path}/lib/libmariadb.so.3 /usr/lib64/libmysqlclient.so.20
        ln -sf ${Setup_Path}/lib/libmariadb.so.3 /usr/lib/libmysqlclient.so.21
        ln -sf ${Setup_Path}/lib/libmariadb.so.3 /usr/lib64/libmysqlclient.so.21
    elif [ -f "${Setup_Path}/lib/mysql/libmysqlclient.so.20" ];then
        ln -sf ${Setup_Path}/lib/mysql/libmysqlclient.so.20 /usr/lib/libmysqlclient.so.16
        ln -sf ${Setup_Path}/lib/mysql/libmysqlclient.so.20 /usr/lib64/libmysqlclient.so.16
        ln -sf ${Setup_Path}/lib/mysql/libmysqlclient.so.20 /usr/lib/libmysqlclient.so.18
        ln -sf ${Setup_Path}/lib/mysql/libmysqlclient.so.20 /usr/lib64/libmysqlclient.so.18
        ln -sf ${Setup_Path}/lib/mysql/libmysqlclient.so.20 /usr/lib/libmysqlclient.so.20
        ln -sf ${Setup_Path}/lib/mysql/libmysqlclient.so.20 /usr/lib64/libmysqlclient.so.20
    fi
}

My_Cnf(){
    if [ "${version}" == "5.1" ]; then
        defaultEngine="MyISAM"

    else
        defaultEngine="InnoDB"
    fi
    cat > /etc/my.cnf<<EOF
[client]
#password	= your_password
port		= 3306
socket		= /tmp/mysql.sock

[mysqld]
port		= 3306
socket		= /tmp/mysql.sock
datadir = ${Data_Path}
default_storage_engine = ${defaultEngine}
skip-external-locking
key_buffer_size = 8M
max_allowed_packet = 100G
table_open_cache = 32
sort_buffer_size = 256K
net_buffer_length = 4K
read_buffer_size = 128K
read_rnd_buffer_size = 256K
myisam_sort_buffer_size = 4M
thread_cache_size = 4
query_cache_size = 4M
tmp_table_size = 8M
sql-mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES

#skip-name-resolve
max_connections = 500
max_connect_errors = 100
open_files_limit = 65535

log-bin=mysql-bin
binlog_format=mixed
server-id = 1
slow_query_log=1
slow-query-log-file=${Data_Path}/mysql-slow.log
long_query_time=3
#log_queries_not_using_indexes=on


innodb_data_home_dir = ${Data_Path}
innodb_data_file_path = ibdata1:10M:autoextend
innodb_log_group_home_dir = ${Data_Path}
innodb_buffer_pool_size = 16M
innodb_log_file_size = 5M
innodb_log_buffer_size = 8M
innodb_flush_log_at_trx_commit = 1
innodb_lock_wait_timeout = 50

[mysqldump]
quick
max_allowed_packet = 500M

[mysql]
no-auto-rehash

[myisamchk]
key_buffer_size = 20M
sort_buffer_size = 20M
read_buffer = 2M
write_buffer = 2M

[mysqlhotcopy]
interactive-timeout
EOF

    if [ "${version}" == "8.0" ] || [ "${version}" == "8.4" ]; then
        sed -i '/server-id/a\binlog_expire_logs_seconds = 600000' /etc/my.cnf
        if [ "${version}" == "8.0" ] ;then
            sed -i '/tmp_table_size/a\default_authentication_plugin = mysql_native_password' /etc/my.cnf
        else
            sed -i '/tmp_table_size/a\mysql_native_password=ON' /etc/my.cnf
        fi
        
        sed -i '/default_authentication_plugin/a\lower_case_table_names = 1' /etc/my.cnf
        sed -i '/query_cache_size/d' /etc/my.cnf
    else
        sed -i '/server-id/a\expire_logs_days = 10' /etc/my.cnf
    fi

    if [ "${version}" != "5.5" ];then
        if [ "${version}" != "5.1" ]; then
            sed -i '/skip-external-locking/i\table_definition_cache = 400' /etc/my.cnf
            sed -i '/table_definition_cache/i\performance_schema_max_table_instances = 400' /etc/my.cnf
        fi
    fi

    if [ "${version}" != "5.1" ]; then
        sed -i '/innodb_lock_wait_timeout/a\innodb_max_dirty_pages_pct = 90' /etc/my.cnf
        sed -i '/innodb_max_dirty_pages_pct/a\innodb_read_io_threads = 4' /etc/my.cnf
        sed -i '/innodb_read_io_threads/a\innodb_write_io_threads = 4' /etc/my.cnf
    fi

    [ "${version}" == "5.1" ] || [ "${version}" == "5.5" ] && sed -i '/STRICT_TRANS_TABLES/d' /etc/my.cnf
    [ "${version}" == "5.7" ] || [ "${version}" == "8.0" ] && sed -i '/#log_queries_not_using_indexes/a\early-plugin-load = ""' /etc/my.cnf
    [ "${version}" == "5.6" ] || [ "${version}" == "5.7" ] || [ "${version}" == "8.0" ] && sed -i '/#skip-name-resolve/i\explicit_defaults_for_timestamp = true' /etc/my.cnf
    chmod 644 /etc/my.cnf
}
MySQL_Opt()
{
    cpuInfo=`cat /proc/cpuinfo |grep "processor"|wc -l`
    sed -i 's/innodb_write_io_threads = 4/innodb_write_io_threads = '${cpuInfo}'/g' /etc/my.cnf
    sed -i 's/innodb_read_io_threads = 4/innodb_read_io_threads = '${cpuInfo}'/g' /etc/my.cnf
    MemTotal=`free -m | grep Mem | awk '{print  $2}'`
    if [[ ${MemTotal} -gt 1024 && ${MemTotal} -lt 2048 ]]; then
        sed -i "s#^key_buffer_size.*#key_buffer_size = 32M#" /etc/my.cnf
        sed -i "s#^table_open_cache.*#table_open_cache = 128#" /etc/my.cnf
        sed -i "s#^sort_buffer_size.*#sort_buffer_size = 768K#" /etc/my.cnf
        sed -i "s#^read_buffer_size.*#read_buffer_size = 768K#" /etc/my.cnf
        sed -i "s#^myisam_sort_buffer_size.*#myisam_sort_buffer_size = 8M#" /etc/my.cnf
        sed -i "s#^thread_cache_size.*#thread_cache_size = 16#" /etc/my.cnf
        sed -i "s#^query_cache_size.*#query_cache_size = 16M#" /etc/my.cnf
        sed -i "s#^tmp_table_size.*#tmp_table_size = 32M#" /etc/my.cnf
        sed -i "s#^innodb_buffer_pool_size.*#innodb_buffer_pool_size = 128M#" /etc/my.cnf
        sed -i "s#^innodb_log_file_size.*#innodb_log_file_size = 64M#" /etc/my.cnf
        sed -i "s#^innodb_log_buffer_size.*#innodb_log_buffer_size = 16M#" /etc/my.cnf
    elif [[ ${MemTotal} -ge 2048 && ${MemTotal} -lt 4096 ]]; then
        sed -i "s#^key_buffer_size.*#key_buffer_size = 64M#" /etc/my.cnf
        sed -i "s#^table_open_cache.*#table_open_cache = 256#" /etc/my.cnf
        sed -i "s#^sort_buffer_size.*#sort_buffer_size = 1M#" /etc/my.cnf
        sed -i "s#^read_buffer_size.*#read_buffer_size = 1M#" /etc/my.cnf
        sed -i "s#^myisam_sort_buffer_size.*#myisam_sort_buffer_size = 16M#" /etc/my.cnf
        sed -i "s#^thread_cache_size.*#thread_cache_size = 32#" /etc/my.cnf
        sed -i "s#^query_cache_size.*#query_cache_size = 32M#" /etc/my.cnf
        sed -i "s#^tmp_table_size.*#tmp_table_size = 64M#" /etc/my.cnf
        sed -i "s#^innodb_buffer_pool_size.*#innodb_buffer_pool_size = 256M#" /etc/my.cnf
        sed -i "s#^innodb_log_file_size.*#innodb_log_file_size = 128M#" /etc/my.cnf
        sed -i "s#^innodb_log_buffer_size.*#innodb_log_buffer_size = 32M#" /etc/my.cnf
    elif [[ ${MemTotal} -ge 4096 && ${MemTotal} -lt 8192 ]]; then
        sed -i "s#^key_buffer_size.*#key_buffer_size = 128M#" /etc/my.cnf
        sed -i "s#^table_open_cache.*#table_open_cache = 512#" /etc/my.cnf
        sed -i "s#^sort_buffer_size.*#sort_buffer_size = 2M#" /etc/my.cnf
        sed -i "s#^read_buffer_size.*#read_buffer_size = 2M#" /etc/my.cnf
        sed -i "s#^myisam_sort_buffer_size.*#myisam_sort_buffer_size = 32M#" /etc/my.cnf
        sed -i "s#^thread_cache_size.*#thread_cache_size = 64#" /etc/my.cnf
        sed -i "s#^query_cache_size.*#query_cache_size = 64M#" /etc/my.cnf
        sed -i "s#^tmp_table_size.*#tmp_table_size = 64M#" /etc/my.cnf
        sed -i "s#^innodb_buffer_pool_size.*#innodb_buffer_pool_size = 512M#" /etc/my.cnf
        sed -i "s#^innodb_log_file_size.*#innodb_log_file_size = 256M#" /etc/my.cnf
        sed -i "s#^innodb_log_buffer_size.*#innodb_log_buffer_size = 64M#" /etc/my.cnf
    elif [[ ${MemTotal} -ge 8192 && ${MemTotal} -lt 16384 ]]; then
        sed -i "s#^key_buffer_size.*#key_buffer_size = 256M#" /etc/my.cnf
        sed -i "s#^table_open_cache.*#table_open_cache = 1024#" /etc/my.cnf
        sed -i "s#^sort_buffer_size.*#sort_buffer_size = 4M#" /etc/my.cnf
        sed -i "s#^read_buffer_size.*#read_buffer_size = 4M#" /etc/my.cnf
        sed -i "s#^myisam_sort_buffer_size.*#myisam_sort_buffer_size = 64M#" /etc/my.cnf
        sed -i "s#^thread_cache_size.*#thread_cache_size = 128#" /etc/my.cnf
        sed -i "s#^query_cache_size.*#query_cache_size = 128M#" /etc/my.cnf
        sed -i "s#^tmp_table_size.*#tmp_table_size = 128M#" /etc/my.cnf
        sed -i "s#^innodb_buffer_pool_size.*#innodb_buffer_pool_size = 1024M#" /etc/my.cnf
        sed -i "s#^innodb_log_file_size.*#innodb_log_file_size = 512M#" /etc/my.cnf
        sed -i "s#^innodb_log_buffer_size.*#innodb_log_buffer_size = 128M#" /etc/my.cnf
    elif [[ ${MemTotal} -ge 16384 && ${MemTotal} -lt 32768 ]]; then
        sed -i "s#^key_buffer_size.*#key_buffer_size = 512M#" /etc/my.cnf
        sed -i "s#^table_open_cache.*#table_open_cache = 2048#" /etc/my.cnf
        sed -i "s#^sort_buffer_size.*#sort_buffer_size = 8M#" /etc/my.cnf
        sed -i "s#^read_buffer_size.*#read_buffer_size = 8M#" /etc/my.cnf
        sed -i "s#^myisam_sort_buffer_size.*#myisam_sort_buffer_size = 128M#" /etc/my.cnf
        sed -i "s#^thread_cache_size.*#thread_cache_size = 256#" /etc/my.cnf
        sed -i "s#^query_cache_size.*#query_cache_size = 256M#" /etc/my.cnf
        sed -i "s#^tmp_table_size.*#tmp_table_size = 256M#" /etc/my.cnf
        sed -i "s#^innodb_buffer_pool_size.*#innodb_buffer_pool_size = 2048M#" /etc/my.cnf
        sed -i "s#^innodb_log_file_size.*#innodb_log_file_size = 1024M#" /etc/my.cnf
        sed -i "s#^innodb_log_buffer_size.*#innodb_log_buffer_size = 256M#" /etc/my.cnf
    elif [[ ${MemTotal} -ge 32768 ]]; then
        sed -i "s#^key_buffer_size.*#key_buffer_size = 1024M#" /etc/my.cnf
        sed -i "s#^table_open_cache.*#table_open_cache = 4096#" /etc/my.cnf
        sed -i "s#^sort_buffer_size.*#sort_buffer_size = 16M#" /etc/my.cnf
        sed -i "s#^read_buffer_size.*#read_buffer_size = 16M#" /etc/my.cnf
        sed -i "s#^myisam_sort_buffer_size.*#myisam_sort_buffer_size = 256M#" /etc/my.cnf
        sed -i "s#^thread_cache_size.*#thread_cache_size = 512#" /etc/my.cnf
        sed -i "s#^query_cache_size.*#query_cache_size = 512M#" /etc/my.cnf
        sed -i "s#^tmp_table_size.*#tmp_table_size = 512M#" /etc/my.cnf
        sed -i "s#^innodb_buffer_pool_size.*#innodb_buffer_pool_size = 4096M#" /etc/my.cnf
    if [ "${version}" == "5.5" ];then
            sed -i "s#^innodb_log_file_size.*#innodb_log_file_size = 1024M#" /etc/my.cnf
            sed -i "s#^innodb_log_buffer_size.*#innodb_log_buffer_size = 256M#" /etc/my.cnf
        else
            sed -i "s#^innodb_log_file_size.*#innodb_log_file_size = 2048M#" /etc/my.cnf
            sed -i "s#^innodb_log_buffer_size.*#innodb_log_buffer_size = 512M#" /etc/my.cnf
        fi
    fi
    chmod 644 /etc/my.cnf
}
Install_Ready(){
    Close_MySQL 
    cd ${run_path}
    mkdir -p ${Setup_Path}
    rm -rf ${Setup_Path}/*
    groupadd mysql
    useradd -s /sbin/nologin -M -g mysql mysql
}
Download_Src(){
    cd ${Setup_Path}

    if [ "${version}" == "8.0" ] && [ "${actionType}" == "update" ];then
    	echo "======================================================================="
    	echo "当前Mysql-8.0版本不支持升级操作"
    	echo "如需升级使用最新的8.0.34版本,需备份好数据重装mysql-8.0(编译方式)才可使用"
    	echo "注：备份后数据可能无法兼容最新版本的Mysql，请谨慎更新"
    	echo "未作升级变更 不影响当前Mysql运行"
    	exit 0
    fi

    if [ "${version}" == "greatsql_5.7" ];then
        version="5.7"
        wget -O ${Setup_Path}/src.tar.gz ${download_Url}/src/greatsql-5.7.36-39.tar.gz
        tar -xvf src.tar.gz
        mv greatsql-5.7.36-39 src
        cd src 
        wget -O boost_1_59_0.tar.gz  ${download_Url}/src/boost_1_59_0.tar.gz
        tar -xvf boost_1_59_0.tar.gz
        mv boost_1_59_0 boost
        GREATSQL_VER="5.7.36"
        GREATSQL_57_SET="-DWITH_TOKUDB=OFF"
        return
    fi

    if [ "${version}" == "greatsql_8.0" ];then
        version="8.0"
        wget -O ${Setup_Path}/src.tar.gz ${download_Url}/src/greatsql-8.0.25-16.tar.gz
        tar -xvf src.tar.gz
        mv greatsql-8.0.25-16 src
        cd src 
        wget -O boost_1_73_0.tar.gz  ${download_Url}/src/boost_1_73_0.tar.gz
        tar -xvf boost_1_73_0.tar.gz
        mv boost_1_73_0 boost
        GREATSQL_VER="8.0.25"
        GREATSQL_80_SET="-DWITH_TOKUDB=OFF -DWITH_ZLIB=bundled -DWITH_ROCKSDB=OFF -DWITH_COREDUMPER=OFF"
        return
    fi

    mariadbCheck=$(echo ${version}|grep mariadb)
    if [ -z "${mariadbCheck}" ]; then
        sqlName="mysql"
    else 
        sqlName="mariadb"
    fi

    if [ "${version}" == "5.7" ];then
        wget -O ${Setup_Path}/src.tar.gz ${download_Url}/src/mysql-boost-${sqlVersion}.tar.gz -T20
    elif [ "${version}" == "8.0" ]; then
        is_8_5=`cat /etc/os-release|grep VERSION=\"8.5\"`
        is_oracle=`cat /etc/os-release|awk '{FS=":"}{print $3}'|grep oracle`
        is_aarch64=$(uname -a|grep aarch64)
        if [ "$is_8_5" == "VERSION=\"8.5\"" ] && [ "$is_oracle" == "oracle" ] && [ "$is_aarch64" != "" ];then
            sqlVersion='8.0.22'
            wget -O ${Setup_Path}/src.tar.gz ${download_Url}/src/mysql-boost-${sqlVersion}.tar.gz -T20
        else
            wget -O ${Setup_Path}/src.tar.gz ${download_Url}/src/mysql-boost-${sqlVersion}.tar.gz -T20
        fi
    else
        wget -O ${Setup_Path}/src.tar.gz ${download_Url}/src/${sqlName}-${sqlVersion}.tar.gz -T20
    fi

    rm -rf ${sqlName}-${sqlVersion}
    rm -rf src
    tar -zxvf src.tar.gz

    armCheck=$(uname -m|grep arm)
    if [ "${version}" == "5.5" ] || [ "${armCheck}" ]; then
        wget -O mysql-5.5-fix-arm-client_plugin.patch ${download_Url}/src/patch/mysql-5.5-fix-arm-client_plugin.patch
        patch -p0 < mysql-5.5-fix-arm-client_plugin.patch
        rm -f mysql-5.5-fix-arm-client_plugin.patch
    fi
    
    mv ${sqlName}-${sqlVersion} src
    cd src
    
    if [ "${version}" == "mariadb_10.4"] || [ "${version}" == "mariadb_10.5" ] || [ "${version}" == "mariadb_10.6" ] ||  [ "${version}" == "mariadb_10.11" ] || [ "${version}" == "mariadb_11.3" ];then
        mkdir -p /www/server/mysql/src/extra/pcre2/src
        wget -O /www/server/mysql/src/extra/pcre2/src/pcre2-10.42.zip ${download_Url}/src/pcre2-10.42.zip
        if [ "${version}" == "mariadb_10.11" ] ||  [ "${version}" == "mariadb_11.3" ];then
            mkdir -p /www/server/mysql/src/extra/libfmt/src
            wget -O /www/server/mysql/src/extra/libfmt/src/8.0.1.zip ${download_Url}/src/fmt-8.0.1.zip
        fi
    fi

    is_aarch64=$(uname -a|grep aarch64)
    if [ "${is_aarch64}" ] && [ "${version}" == "5.7" ] && [ "${Centos7Check}" ];then
        rm -f storage/innobase/CMakeLists.txt
        rm -f sql/mysqld.cc

        \cp  /usr/include/sys/prctl.h include/
        wget -O storage/innobase/CMakeLists.txt ${download_Url}/patch/mysql/57/CMakeLists.txt
        wget -O sql/mysqld.cc ${download_Url}/patch/mysql/57/mysqld.cc
    fi

}
Install_Configure(){

    name=mysql
    i_path=/www/server/panel/install/$name

    i_args=$(cat $i_path/config.pl|xargs)
    i_make_args=""
    for i_name in $i_args
    do
        init_file=$i_path/$i_name/init.sh
        if [ -f $init_file ];then
            bash $init_file
        fi
        args_file=$i_path/$i_name/args.pl
        if [ -f $args_file ];then
            args_string=$(cat $args_file)
            i_make_args="$i_make_args $args_string"
        fi
    done

    cd src ${Setup_Path}/src
    if [ "${version}" == "5.1" ];then
        gccVersionCheck
        ./configure --prefix=${Setup_Path} --sysconfdir=/etc --with-plugins=csv,myisam,myisammrg,heap,innobase --with-extra-charsets=all --with-charset=utf8 --with-collation=utf8_general_ci --with-embedded-server --enable-local-infile --enable-assembler --with-mysqld-ldflags=-all-static --enable-thread-safe-client --with-big-tables --with-readline --with-ssl ${i_make_args} 2>&1|tee /tmp/mysql_config.pl
    elif [ "${version}" == "5.5" ]; then
        gccVersionCheck
        cmake -DCMAKE_INSTALL_PREFIX=${Setup_Path} -DSYSCONFDIR=/etc -DWITH_MYISAM_STORAGE_ENGINE=1 -DWITH_INNOBASE_STORAGE_ENGINE=1 -DWITH_PARTITION_STORAGE_ENGINE=1 -DWITH_FEDERATED_STORAGE_ENGINE=1 -DEXTRA_CHARSETS=all -DDEFAULT_CHARSET=utf8mb4 -DDEFAULT_COLLATION=utf8mb4_general_ci -DWITH_READLINE=1 -DWITH_EMBEDDED_SERVER=1 -DENABLED_LOCAL_INFILE=1 ${i_make_args} 2>&1|tee /tmp/mysql_config.pl
    elif [  "${version}" == "5.6" ]; then
        cmake -DCMAKE_INSTALL_PREFIX=${Setup_Path} -DSYSCONFDIR=/etc -DWITH_MYISAM_STORAGE_ENGINE=1 -DWITH_INNOBASE_STORAGE_ENGINE=1 -DWITH_PARTITION_STORAGE_ENGINE=1 -DWITH_FEDERATED_STORAGE_ENGINE=1 -DEXTRA_CHARSETS=all -DDEFAULT_CHARSET=utf8mb4 -DDEFAULT_COLLATION=utf8mb4_general_ci -DWITH_EMBEDDED_SERVER=1 -DENABLED_LOCAL_INFILE=1 ${WITH_SSL} ${i_make_args}  2>&1|tee /tmp/mysql_config.pl
    elif [ "${version}" == "5.7" ]; then
        mkdir install
        cd install
        cmake .. -DCMAKE_INSTALL_PREFIX=${Setup_Path} -DSYSCONFDIR=/etc -DWITH_MYISAM_STORAGE_ENGINE=1 -DWITH_INNOBASE_STORAGE_ENGINE=1 -DWITH_PARTITION_STORAGE_ENGINE=1 -DWITH_FEDERATED_STORAGE_ENGINE=1 -DEXTRA_CHARSETS=all -DDEFAULT_CHARSET=utf8mb4 -DDEFAULT_COLLATION=utf8mb4_general_ci -DWITH_EMBEDDED_SERVER=1 -DENABLED_LOCAL_INFILE=1 -DWITH_BOOST=../boost ${WITH_SSL} ${i_make_args} ${GREATSQL_57_SET} 2>&1|tee /tmp/mysql_config.pl
    elif [ "${version}" == "8.0" ]; then
        mkdir install
        cd install
        cmakeV="cmake"
        if [ "${PM}" = "yum" ]; then
            if [ "${Centos7Check}" ];then
                yum install centos-release-scl-rh -y
            	if [ -f "/etc/yum.repos.d/CentOS-SCLo-scl-rh.repo" ];then
            		sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-SCLo-scl-rh.repo
            		sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.epel.cloud|g' /etc/yum.repos.d/CentOS-SCLo-scl-rh.repo
            	fi
                yum install devtoolset-8-gcc devtoolset-8-gcc-c++ -y
                yum install cmake3 -y
                cmakeV="cmake3"
                export CC=/opt/rh/devtoolset-8/root/usr/bin/gcc
                export CXX=/opt/rh/devtoolset-8/root/usr/bin/g++
            else
                export CC=/usr/bin/gcc
                export CXX=/usr/bin/g++
            fi
        fi
        ${cmakeV} .. -DCMAKE_INSTALL_PREFIX=${Setup_Path} -DSYSCONFDIR=/etc -DWITH_MYISAM_STORAGE_ENGINE=1 -DWITH_INNOBASE_STORAGE_ENGINE=1 -DWITH_PARTITION_STORAGE_ENGINE=1 -DDEFAULT_CHARSET=utf8mb4 -DDEFAULT_COLLATION=utf8mb4_general_ci -DENABLED_LOCAL_INFILE=1 -DWITH_BOOST=../boost ${WITH_SSL} ${i_make_args} 2>&1|tee /tmp/mysql_config.pl
    elif [ "${version}" == "8.4" ]; then
        mkdir install
        cd install
        cmakeV="cmake"
        if [ "${PM}" = "yum" ]; then
            if [ "${Centos7Check}" ];then
                yum install centos-release-scl-rh -y
            	if [ -f "/etc/yum.repos.d/CentOS-SCLo-scl-rh.repo" ];then
            		sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-SCLo-scl-rh.repo
            		sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.epel.cloud|g' /etc/yum.repos.d/CentOS-SCLo-scl-rh.repo
            	fi
                yum install devtoolset-10-gcc devtoolset-10-gcc-c++ -y
                yum install cmake3 -y
                cmakeV="cmake3"
                export CC=/opt/rh/devtoolset-10/root/usr/bin/gcc
                export CXX=/opt/rh/devtoolset-10/root/usr/bin/g++
            else
                export CC=/usr/bin/gcc
                export CXX=/usr/bin/g++
            fi
        fi
        ${cmakeV} .. -DCMAKE_INSTALL_PREFIX=${Setup_Path} -DSYSCONFDIR=/etc -DWITH_MYISAM_STORAGE_ENGINE=1 -DWITH_INNOBASE_STORAGE_ENGINE=1 -DWITH_PARTITION_STORAGE_ENGINE=1 -DDEFAULT_CHARSET=utf8mb4 -DDEFAULT_COLLATION=utf8mb4_general_ci -DENABLED_LOCAL_INFILE=1 ${GREATSQL_80_SET} ${WITH_SSL} ${i_make_args} 2>&1|tee /tmp/mysql_config.pl
    elif [ "${version}" == "alisql" ]; then
         cmake -DCMAKE_INSTALL_PREFIX=${Setup_Path} -DMYSQL_UNIX_ADDR=/tmp/mysql.sock -DDEFAULT_CHARSET=utf8   -DDEFAULT_COLLATION=utf8_general_ci -DWITH_INNOBASE_STORAGE_ENGINE=1 -DWITH_ARCHIVE_STORAGE_ENGINE=1 -DWITH_BLACKHOLE_STORAGE_ENGINE=1 -DMYSQL_DATADIR=${Data_Path} -DMYSQL_TCP_PORT=3306 -DENABLE_DOWNLOADS=1 ${i_make_args} 2>&1|tee /tmp/mysql_config.pl
    elif [ "${version}" == "mariadb_10.0" ]; then
        cmake -DCMAKE_INSTALL_PREFIX=${Setup_Path} -DWITH_ARIA_STORAGE_ENGINE=1 -DWITH_XTRADB_STORAGE_ENGINE=1 -DWITH_INNOBASE_STORAGE_ENGINE=1 -DWITH_PARTITION_STORAGE_ENGINE=1 -DWITH_MYISAM_STORAGE_ENGINE=1 -DWITH_FEDERATED_STORAGE_ENGINE=1 -DEXTRA_CHARSETS=all -DDEFAULT_CHARSET=utf8mb4 -DDEFAULT_COLLATION=utf8mb4_general_ci -DWITH_READLINE=1 -DWITH_EMBEDDED_SERVER=1 -DENABLED_LOCAL_INFILE=1 ${i_make_args} 2>&1|tee /tmp/mysql_config.pl
    elif [ "${version}" == "mariadb_10.6" ] || [ "${version}" == "mariadb_10.5" ]; then
        cmakeV="cmake"
        if [ "${PM}" = "yum" ]; then
            if [ "${Centos7Check}" ];then
                yum install centos-release-scl-rh -y
            	if [ -f "/etc/yum.repos.d/CentOS-SCLo-scl-rh.repo" ];then
            		sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-SCLo-scl-rh.repo
            		sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.epel.cloud|g' /etc/yum.repos.d/CentOS-SCLo-scl-rh.repo
            	fi
                yum install devtoolset-7-gcc devtoolset-7-gcc-c++ -y
                yum install cmake3 -y
                cmakeV="cmake3"
                export CC=/opt/rh/devtoolset-7/root/usr/bin/gcc
                export CXX=/opt/rh/devtoolset-7/root/usr/bin/g++
            else
                export CC=/usr/bin/gcc
                export CXX=/usr/bin/g++
            fi
            ${cmakeV} -DCMAKE_INSTALL_PREFIX=${Setup_Path} -DWITH_ARIA_STORAGE_ENGINE=1 -DWITH_XTRADB_STORAGE_ENGINE=1 -DWITH_INNOBASE_STORAGE_ENGINE=1 -DWITH_PARTITION_STORAGE_ENGINE=1 -DWITH_MYISAM_STORAGE_ENGINE=1 -DWITH_FEDERATED_STORAGE_ENGINE=1 -DEXTRA_CHARSETS=all -DDEFAULT_CHARSET=utf8mb4 -DDEFAULT_COLLATION=utf8mb4_general_ci -DWITH_READLINE=1 -DWITH_EMBEDDED_SERVER=1 -DENABLED_LOCAL_INFILE=1 -DWITHOUT_TOKUDB=1 ${i_make_args} 2>&1|tee /tmp/mysql_config.pl
        else
            cmake -DCMAKE_INSTALL_PREFIX=${Setup_Path} -DWITH_ARIA_STORAGE_ENGINE=1 -DWITH_XTRADB_STORAGE_ENGINE=1 -DWITH_INNOBASE_STORAGE_ENGINE=1 -DWITH_PARTITION_STORAGE_ENGINE=1 -DWITH_MYISAM_STORAGE_ENGINE=1 -DWITH_FEDERATED_STORAGE_ENGINE=1 -DEXTRA_CHARSETS=all -DDEFAULT_CHARSET=utf8mb4 -DDEFAULT_COLLATION=utf8mb4_general_ci -DWITH_READLINE=1 -DWITH_EMBEDDED_SERVER=1 -DENABLED_LOCAL_INFILE=1 -DWITHOUT_TOKUDB=1 ${i_make_args} 2>&1|tee /tmp/mysql_config.pl
        fi
    elif [ "${version}" == "mariadb_10.7" ] || [ "${version}" == "mariadb_10.8" ] || [ "${version}" == "mariadb_10.11" ] || [ "${version}" == "mariadb_11.3" ]; then
        cmakeV="cmake"
        if [ "${PM}" = "yum" ]; then
            if [ "${Centos7Check}" ];then
                yum install centos-release-scl-rh -y
                yum install devtoolset-7-gcc devtoolset-7-gcc-c++ -y
                yum install cmake3 -y
                cmakeV="cmake3"
                export CC=/usr/bin/gcc
                export CXX=/usr/bin/g++
            fi
            ${cmakeV} -DCMAKE_INSTALL_PREFIX=${Setup_Path} -DWITH_ARIA_STORAGE_ENGINE=1 -DWITH_XTRADB_STORAGE_ENGINE=1 -DWITH_INNOBASE_STORAGE_ENGINE=1 -DWITH_PARTITION_STORAGE_ENGINE=1 -DWITH_MYISAM_STORAGE_ENGINE=1 -DWITH_FEDERATED_STORAGE_ENGINE=1 -DEXTRA_CHARSETS=all -DDEFAULT_CHARSET=utf8mb4 -DDEFAULT_COLLATION=utf8mb4_general_ci -DWITH_READLINE=1 -DWITH_EMBEDDED_SERVER=1 -DENABLED_LOCAL_INFILE=1 -DWITHOUT_TOKUDB=1 ${i_make_args} 2>&1|tee /tmp/mysql_config.pl
        else
            cmake -DCMAKE_INSTALL_PREFIX=${Setup_Path} -DWITH_ARIA_STORAGE_ENGINE=1 -DWITH_XTRADB_STORAGE_ENGINE=1 -DWITH_INNOBASE_STORAGE_ENGINE=1 -DWITH_PARTITION_STORAGE_ENGINE=1 -DWITH_MYISAM_STORAGE_ENGINE=1 -DWITH_FEDERATED_STORAGE_ENGINE=1 -DEXTRA_CHARSETS=all -DDEFAULT_CHARSET=utf8mb4 -DDEFAULT_COLLATION=utf8mb4_general_ci -DWITH_READLINE=1 -DWITH_EMBEDDED_SERVER=1 -DENABLED_LOCAL_INFILE=1 -DWITHOUT_TOKUDB=1 ${i_make_args} 2>&1|tee /tmp/mysql_config.pl
        fi
    else
        cmake -DCMAKE_INSTALL_PREFIX=${Setup_Path} -DWITH_ARIA_STORAGE_ENGINE=1 -DWITH_XTRADB_STORAGE_ENGINE=1 -DWITH_INNOBASE_STORAGE_ENGINE=1 -DWITH_PARTITION_STORAGE_ENGINE=1 -DWITH_MYISAM_STORAGE_ENGINE=1 -DWITH_FEDERATED_STORAGE_ENGINE=1 -DEXTRA_CHARSETS=all -DDEFAULT_CHARSET=utf8mb4 -DDEFAULT_COLLATION=utf8mb4_general_ci -DWITH_READLINE=1 -DWITH_EMBEDDED_SERVER=1 -DENABLED_LOCAL_INFILE=1 -DWITHOUT_TOKUDB=1 ${i_make_args} 2>&1|tee /tmp/mysql_config.pl
    fi
    set -o pipefail
    make -j${cpuCore} 2>&1|tee /tmp/mysql_make.pl
    
    if [ $? -ne 0 ];then
        echo '========================================================'
        GetSysInfo
        WSL_CHECK=$(uname -a|grep WSL)
        echo -e "ERROR: mysql ${version} installation failed.";
        if [ "${WSL_CHECK}" ];then
            echo "检测为windows wsl系统进行安装，未对此环境进行兼容测试"
            echo "建议使用虚拟机安装ubuntu-22使用或使用云服务器安装宝塔面板"
        fi
        
        CC_KILL_CHECK=$(cat /tmp/mysql_make.pl |grep  "Killed")
        if [ "${CC_KILL_CHECK}" ];then
            echo "检测到编译进程被杀死，一般由以下原因造成"
            echo "1.服务器内存不足，建议增加服务器内存/更换低版本mysql/使用极速方式安装"
            echo "2.开启了安全防护软件导致进程被kill，请关闭安全防护软件后再进行安装"
            exit 1
        fi
        
        if [ -z "${SYS_VERSION}" ];then
            echo -e "============================================"
            echo -e "检测到为非常用系统安装,请尝试安装其他Mysql版本看是否正常"
            echo -e "如无法正常安装，建议更换至Centos-7或Debian-10+或Ubuntu-20+系统安装宝塔面板"
            echo -e "详情请查看系统兼容表：https://docs.qq.com/sheet/DUm54VUtyTVNlc21H?tab=BB08J2"
            echo -e "特殊情况可通过以下联系方式寻求安装协助情况"
            echo -e "============================================"
        fi
        echo -e "安装失败，请截图以上报错信息发帖至论坛www.bt.cn/bbs求助"
        echo -e "============================================"
        if [ "${version}" == "mariadb_10.0" ] || [ "${version}" == "mariadb_10.1" ] || [ "${version}" == "mariadb_10.2" ] || [ "${version}" == "mariadb_10.3" ] || [ "${version}" == "mariadb_10.7" ] || [ "${version}" == "mariadb_10.8" ];then
            echo -e "${version}安装失败 此版本mariadb官方已经不再维护"
            echo -e "建议选择mariadb-10.4/10.5/10.6/10.11进行安装"
            echo -e "============================================"
            exit 1;
        fi
        WSL_CHECK=$(uname -a|grep Microsoft)
        if [ "${WSL_CHECK}" ];then
            echo -e "宝塔未兼容测试过Microsoft WSL子系统进行安装"
            echo -e "建议使用虚拟机安装ubuntu-22安装宝塔面板"
            exit 1
        fi
        VELINUX_CHECK=$(uname -a|grep velinux1)
        if [ "$VELINUX_CHECK" ];then
            echo -e "宝塔未兼容测试过velinux系统进行安装"
            echo -e "建议更换至Centos-7或Debian-10+或Ubuntu-20+系统安装宝塔面板板"
            exit 1
        fi
        rockchip64_CHECK=$(uname -a|grep rockchip64)
        if [ "$VELINUX_CHECK" ];then
            echo -e "宝塔未兼容测试过rockchip64系统进行安装"
            echo -e "建议更换至Centos-7或Debian-10+或Ubuntu-20+服务器系统安装宝塔面板板"
            exit 1
        fi
        KALI_CHECK=$(uname -a|grep Kali)
        if [ "${WSL_CHECK}" ];then
            echo -e "宝塔未兼容测试过Kali系统进行安装"
            echo -e "建议更换至Centos-7或Debian-10+或Ubuntu-20+系统安装宝塔面板板"
            exit 1
        fi
        ARMBIAN_CHECK=$(uname -a|grep Armbian)
        if [ "${ARMBIAN_CHECK}" ];then
            echo -e "宝塔未详细兼容测试过Armbian系统进行安装"
            echo -e "建议更换至Centos-7或Debian-10+或Ubuntu-20+系统安装宝塔面板板"
            exit 1
        fi
        RJ3328_CHECK=$(uname -a|grep rk3328)
        if [ "${RJ3328_CHECK}" ];then
            echo -e "宝塔未兼容测试过电视盒子进行安装"
            echo -e "建议更换至Centos-7或Debian-10+或Ubuntu-20+系统安装宝塔面板板"
            exit 1
        fi
        XIAOMI_CHECK=$(uname -a|grep xiaomi)
        if [ "${XIAOMI_CHECK}" ];then
            echo -e "宝塔未兼容测试过安卓手机进行安装"
            echo -e "建议更换至Centos-7或Debian-10+或Ubuntu-20+服务器系统安装宝塔面板板"
            exit 1
        fi
        KY_10_CHECK=$(uname -a|grep ky10)
        if [ "${KY_10_CHECK}" ];then
            exit 1
        fi
        if [ -f "/etc/redhat-release" ];then
            LINUX_KIT_CHECK=$(uname -a|grep linuxkit)
            if [ "${LINUX_KIT_CHECK}" ];then
                echo -e "宝塔未兼容测试过linuxkit(docker)环境下进行安装"
                echo -e "建议更换至服务器系统Centos-7或Debian-10+或Ubuntu-20+系统安装宝塔面板板"
                exit 1
            fi
            BBR_CHECK=$(uname -a|grep bbrplus)
            if [ "${BBR_CHECK}" ];then
                echo -e "检测已使用bbr更新过内核，建议更新完内核在安装宝塔面板然后再安装软件"
                echo -e "或如需高版本内核，可使用Ubuntu-22/Debian-12进行安装宝塔面板"
                exit 1
            fi
            ELREPO_CHECK=$(uname -a|grep elrepo)
            if [ "${ELREPO_CHECK}" ];then
                echo -e "检测更新过内核，建议更新完内核在安装宝塔面板然后再安装软件"
                echo -e "或如需高版本内核，可使用Ubuntu-22/Debian-12进行安装宝塔面板"
                exit 1
            fi
            
        fi
        
        if [ "${PM}" == "apt-get" ];then
            UBUNTU_23_CHECK=$(cat /etc/issue|grep Ubuntu|grep 23)
            if [ "${UBUNTU_23_CHECK}" ];then
                echo -e "宝塔未兼容测试过Ubuntu-23（预览版）环境下进行安装"
                echo -e "建议更换至服务器系统Centos-7或Debian-12或Ubuntu-22系统安装宝塔面板板"
                exit 1
            fi
            POP_CHECK=$(cat /etc/issue|grep Pop)
            if [ "${POP_CHECK}" ];then
                echo -e "宝塔未兼容测试过Pop!_OS 环境下进行安装"
                echo -e "建议更换至服务器系统Centos-7或Debian-12或Ubuntu-22系统安装宝塔面板板"
                exit 1
            fi
        fi
        # Error_Send
        exit 1;
    fi
    set -o pipefail
}
Install_Mysql(){
    if [ "${actionType}" == "update" ]; then
        /etc/init.d/mysqld stop
        sleep 2
        make install
        sleep 2
        /etc/init.d/mysqld start
        printVersion
        rm -f ${Setup_Path}/version_check.pl
        rm -f ${Setup_Path}/src.tar.gz
        rm -rf ${Setup_Path}/src
        exit 0;
    fi
    make install

    [ "${version}" == "8.0" ] || [ "${version}" == "mariadb_10.2" ] || [ "${version}" == "mariadb_10.3" ] || [ "${version}" == "mariadb_10.4" ]&& echo "True" > ${Setup_Path}/mysqlDb3.pl
}
Mysql_Initialize(){
    if [ -d "${Data_Path}" ]; then
        rm -rf ${Data_Path}/*
    else
        mkdir -p ${Data_Path}
    fi

    chown -R mysql:mysql ${Data_Path}
    chgrp -R mysql ${Setup_Path}/.

    if [ "${version}" == "mariadb_10.4" ] || [ "${version}" == "mariadb_10.5" ]; then
        mkdir -p ${Setup_Path}/lib/plugin/auth_pam_tool_dir/auth_pam_tool_dir
        wget -O ${Setup_Path}/scripts/mysql_install_db ${download_Url}/tools/mysql_install_db
        Authentication_Method="--auth-root-authentication-method=normal"
    fi

    if [ "${version}" == "mariadb_10.6" ] || [ "${version}" == "mariadb_10.7" ] || [ "${version}" == "mariadb_10.11" ] || [ "${version}" == "mariadb_11.3" ]; then
        mkdir -p ${Setup_Path}/lib/plugin/auth_pam_tool_dir/auth_pam_tool_dir
        Authentication_Method="--auth-root-authentication-method=normal"
        if [ -d "/etc/mysql" ];then
            mv /etc/mysql /etc/mysql.bak
        fi
    fi

    if [ "${version}" == "5.1" ]; then
        ${Setup_Path}/bin/mysql_install_db --defaults-file=/etc/my.cnf --basedir=${Setup_Path} --datadir=${Data_Path} --user=mysql
    elif [ "${version}" == "5.7" ] || [ "${version}" == "8.0" ] ||  [ "${version}" == "8.4" ] ;then
        ${Setup_Path}/bin/mysqld --initialize-insecure --basedir=${Setup_Path} --datadir=${Data_Path} --user=mysql
    else
        ${Setup_Path}/scripts/mysql_install_db --defaults-file=/etc/my.cnf --basedir=${Setup_Path} --datadir=${Data_Path} --user=mysql ${Authentication_Method}
    fi

    rm -f /etc/init.d/mysqld
    \cp support-files/mysql.server /etc/init.d/mysqld
    chmod 755 /etc/init.d/mysqld

    if [[ "${version}" != "5.7" && "${version}" != "8.0" && "${version}" != "8.4" ]]; then
        sed -i "s#\"\$\*\"#--sql-mode=\"NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION\"#" /etc/init.d/mysqld
    fi
    
    sed -i 's/$bindir\/mysqld_safe /&--defaults-file="\/etc\/my.cnf" /' /etc/init.d/mysqld
    sed -i '/case "$mode" in/i\ulimit -s unlimited' /etc/init.d/mysqld

    cat > /etc/ld.so.conf.d/mysql.conf<<EOF
${Setup_Path}/lib
EOF
    ldconfig
    ln -sf ${Setup_Path}/lib/mysql /usr/lib/mysql
    ln -sf ${Setup_Path}/include/mysql /usr/include/mysql
    /etc/init.d/mysqld start

    ${Setup_Path}/bin/mysqladmin -u root password "${mysqlpwd}"

    cd ${Setup_Path}
    rm -f src.tar.gz
    rm -rf src
    /etc/init.d/mysqld start

}

Bt_Check(){
    checkFile="/www/server/panel/install/check.sh"
    wget -O ${checkFile} ${download_Url}/tools/check.sh			
    . ${checkFile} 
}

Close_MySQL()
{	
    [ -f "/etc/init.d/mysqld" ] && /etc/init.d/mysqld stop

    if [ "${PM}" = "yum" ];then
        mysqlVersion=`rpm -qa |grep bt-mysql-`
        mariadbVersion=`rpm -qa |grep bt-mariadb-`
        [ "${mysqlVersion}" ] && rpm -e $mysqlVersion --nodeps
        [ "${mariadbVersion}" ] && rpm -e $mariadbVersion --nodeps
        [ -f "${Setup_Path}/rpm.pl" ] && yum remove $(cat ${Setup_Path}/rpm.pl) -y
    elif [ "${PM}" = "apt-get" ]; then
        [ -f "${Setup_Path}/deb.pl" ] && apt-get remove $(cat ${Setup_Path}/deb.pl) -y
    fi

    if [ -f "${Setup_Path}/bin/mysql" ];then
        Service_Del
        rm -f /etc/init.d/mysqld
        rm -rf ${Setup_Path}
        mkdir -p /www/backup
        [ -d "/www/backup/oldData" ] && rm -rf /www/backup/oldData
        mv -f $Data_Path  /www/backup/oldData
        rm -rf $Data_Path
        rm -f /usr/bin/mysql*
        rm -f /usr/lib/libmysql*
        rm -f /usr/lib64/libmysql*
    fi
}

actionType=$1
version=$2

if [ "${actionType}" == 'install' ] || [ "${actionType}" == "update" ];then
    if [ -z "${version}" ]; then
        exit
    fi
    mysqlpwd=`cat /dev/urandom | head -n 16 | md5sum | head -c 16`
    case "$version" in
        '5.1')
            sqlVersion=${mysql_51}
            ;;
        '5.5')
            sqlVersion=${mysql_55}
            ;;
        '5.6')
            sqlVersion=${mysql_56}
            ;;
        '5.7')
            sqlVersion=${mysql_57}
            ;;
        '8.0')
            sqlVersion=${mysql_80}
            ;;
        '8.4')
            sqlVersion=${mysql_84}
            ;;
        'alisql')
            sqlVersion=${alisql_version}
            ;;
        'mariadb_10.0')
            sqlVersion=${mysql_mariadb_100}
            ;;		
        'mariadb_10.1')
            sqlVersion=${mysql_mariadb_101}
            ;;
        'mariadb_10.2')
            sqlVersion=${mysql_mariadb_102}
            ;;
        'mariadb_10.3')
            sqlVersion=${mysql_mariadb_103}
            ;;
        'mariadb_10.4')
            sqlVersion=${mysql_mariadb_104}
            ;;
        'mariadb_10.5')
            sqlVersion=${mysql_mariadb_105}
            ;;
        'mariadb_10.6')
            sqlVersion=${mysql_mariadb_106}
            ;;
        'mariadb_10.7')
            sqlVersion=${mysql_mariadb_107}
            ;;
        'mariadb_10.8')
            sqlVersion=${mysql_mariadb_108}
            ;;
        'mariadb_10.11')
            sqlVersion=${mysql_mariadb_1011}
            ;;
        'mariadb_11.3')
            sqlVersion=${mysql_mariadb_113}
            ;;
    esac
    
    
    if [ "${actionType}" == "update" ]; then
        case "${version}" in 
            5.5|5.6|5.7|8.0|8.4)
                ;;
            *)
                echo "==================================================================="
                echo "mysql-${version}版本不支持更新操作"
                echo "如有疑问请发帖至论坛www.bt.cn/bbs反馈"
                exit 1
        esac

        if [ ! -f "/www/server/mysql/version.pl" ];then
            echo "==================================================================="
            echo "未检测到当前的mysql版本信息与更新版本匹配，禁止更新"
            echo "如有疑问请发帖至论坛www.bt.cn/bbs反馈"
            exit 1;
        else
            MYSQL_RUN_V=$(cat /www/server/mysql/version.pl)
            if [ "${MYSQL_RUN_V:0:3}" != "${version}" ];then
                echo "===================================================================="
                echo "当前mysql运行版本：mysql-${MYSQL_RUN_V} 更新版本：mysql-$sqlVersion"
                echo "当前mysql版本与更新版本主版本不一致，无法进行更新！"
                echo "请截图以上信息发帖至论坛www.bt.cn/bbs求助"
                exit 1
            fi
        fi
    fi
    
    Mem_Check
    System_Lib
    if [ "${actionType}" == "install" ]; then
        MYSQL_RUN=$(ps -ef|grep mysql|grep -v grep) 
        if [ "${MYSQL_RUN}" ] && [ -f "/www/server/mysql/bin/mysql" ];then
            echo "当前已有数据库正在运行 停止安装!"
            exit 1 
        fi
        Install_Ready
    fi
    
    if [ -z "${Centos7Check}" ] && [ "${PM}" == "yum" ];then
        yum install libtirpc libtirpc-devel -y
    fi


    OPENSSL_30_VER=$(openssl version|grep '3.0')
    if [ "${OPENSSL_30_VER}" ];then
        Install_Openssl111
        if [ "${version}" == "8.0" ] || [ "${version}" == "8.4" ];then
            if [ "${PM}" == "yum" ];then
                yum install openldap-devel patchelf -y
            elif [ "${PM}" == "apt-get" ]; then
                apt-get install patchelf -y
            fi
        fi
    fi

    Install_Rpcgen
    Download_Src
    Install_Configure
    Install_Mysql
    My_Cnf
    MySQL_Opt
    Mysql_Initialize
    SetLink
    Service_Add
    printVersion
    Install_Mysql_PyDb
    
    if [ -f '/www/server/panel/tools.py' ];then
        if [ "btpython" ];then
            btpython /www/server/panel/tools.py root $mysqlpwd
        else
            python /www/server/panel/tools.py root $mysqlpwd
        fi
    else
        python /www/server/panel/tools.pyc root $mysqlpwd
    fi

    Drop_Test_Databashes
elif [ "$actionType" == 'uninstall' ];then
    Close_MySQL del
fi


