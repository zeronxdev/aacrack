#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH
install_tmp='/tmp/bt_install.pl'
#public_file=/www/server/panel/install/public.sh
#if [ ! -f $public_file ];then
#	wget -O $public_file http://node.aapanel.com/install/public.sh -T 20;
#fi
#. $public_file

#download_Url=$NODE_URL
download_Url=https://node.aapanel.com
echo 'download url...'
echo $download_Url
pluginPath=/www/server/panel/plugin/mail_sys
pluginStaticPath=/www/server/panel/plugin/mail_sys/static

cpu_arch=`arch`
if [[ $cpu_arch != "x86_64" ]];then
  echo 'Does not support non-x86 system installation'
  exit 0
fi

if [ -f "/usr/bin/apt-get" ];then
  systemver='ubuntu'
elif [ -f "/etc/redhat-release" ];then
  systemver=`cat /etc/redhat-release|sed -r 's/.* ([0-9]+)\..*/\1/'`
  postfixver=`/sbin/postconf mail_version|sed -r 's/.* ([0-9\.]+)$/\1/'`
else
  echo 'Unsupported system version'
  exit 0
fi

Install_centos7()
{
  if [[ $cpu_arch != "x86_64" ]];then
    echo 'Does not support non-x86 system installation'
    exit 0
  fi

  yum install epel-release -y
  # 卸载系统自带的postfix
  if [[ $cpu_arch = "x86_64" && $postfixver != "3.4.7" ]];then
    yum remove postfix -y
    rm -rf /etc/postfix
  fi
  # 安装postfix和postfix-sqlite
  wget -O /tmp/postfix3-3.4.7-1.gf.el7.x86_64.rpm $download_Url/install/plugin/mail_sys/rpm/postfix3-3.4.7-1.gf.el7.x86_64.rpm
  yum localinstall /tmp/postfix3-3.4.7-1.gf.el7.x86_64.rpm -y
  wget -O /tmp/postfix3-sqlite-3.4.7-1.gf.el7.x86_64.rpm $download_Url/install/plugin/mail_sys/rpm/postfix3-sqlite-3.4.7-1.gf.el7.x86_64.rpm
  yum localinstall /tmp/postfix3-sqlite-3.4.7-1.gf.el7.x86_64.rpm -y
  # 测试后版本号为3.6.4-1ubuntu1.3
  if [[ ! -f "/usr/sbin/postfix" ]]; then
    yum install postfix -y
    yum install postfix-sqlite -y

    echo '333 Automatically select the version to install postfix and postfix-sqlite' > $install_tmp

  fi
  # 安装dovecot和dovecot-sieve
  yum install dovecot-pigeonhole -y
  if [[ ! -f "/usr/sbin/dovecot" ]]; then
    yum install dovecot -y
  fi

  #获取rspamd网站，检查判断返回是否200
  ping_url=$(curl -I -m 10 -o /dev/null -s -w %{http_code}"\n" https://rspamd.com)

  #安装rspamd  如果网络有问题时不使用官方源
  if [ $ping_url != "200" ]; then
      Install_rspamd_rpm
  else
      install_rspamd
  fi
  yum install cyrus-sasl-plain -y
}

install_rspamd()
{
  if [[ $systemver = "7" ]];then
    wget -O /etc/yum.repos.d/rspamd.repo https://rspamd.com/rpm-stable/centos-7/rspamd.repo
    rpm --import https://rspamd.com/rpm-stable/gpg.key
    # yum makecache -y
    yum install rspamd -y
  elif [ $systemver = "8" ]; then
    wget -O /etc/yum.repos.d/rspamd.repo https://rspamd.com/rpm-stable/centos-8/rspamd.repo
    rpm --import https://rspamd.com/rpm-stable/gpg.key
    # yum makecache -y
    yum install rspamd -y
  else
    # apt-get install -y lsb-release wget gpg  # for install
    CODENAME=`lsb_release -c -s`
    mkdir -p /etc/apt/keyrings
    wget -O- https://rspamd.com/apt-stable/gpg.key | gpg --dearmor | tee /etc/apt/keyrings/rspamd.gpg > /dev/null
    echo "deb [arch=amd64 signed-by=/etc/apt/keyrings/rspamd.gpg] http://rspamd.com/apt-stable/ $CODENAME main" | tee /etc/apt/sources.list.d/rspamd.list
    echo "deb-src [arch=amd64 signed-by=/etc/apt/keyrings/rspamd.gpg] http://rspamd.com/apt-stable/ $CODENAME main"  | tee -a /etc/apt/sources.list.d/rspamd.list
    apt-get update
        export DEBIAN_FRONTEND=noninteractive
    apt-get --no-install-recommends install rspamd -y --allow-downgrades --allow-remove-essential --allow-change-held-packages
    fi
    # 解压
  wget -O /usr/share/rspamd/www/rspamd.zip $download_Url/install/plugin/mail_sys_en/rspamd.zip -T 20
#  cp $pluginStaticPath/rspamd.zip /usr/share/rspamd/www
  cd /usr/share/rspamd/www
  unzip -o rspamd.zip
}

Install_rspamd_rpm() {
    if [[ $systemver = "7" ]]; then
        wget $download_Url/src/rspamd-3.4-1.x86_64.rpm
        rpm -ivh rspamd-3.4-1.x86_64.rpm
        rm -f rspamd-3.4-1.x86_64.rpm
    elif [[ $systemver = "8" ]]; then
        wget $download_Url/src/rspamd-3.4-1.x86_64.rpm
        rpm -ivh rspamd-3.4-1.x86_64.rpm
        rm -f rspamd-3.4-1.x86_64.rpm
    else
        apt-get install -y lsb-release wget gpg  # for install
        CODENAME=`lsb_release -c -s`
        mkdir -p /etc/apt/keyrings
        wget -O- https://rspamd.com/apt-stable/gpg.key | gpg --dearmor |  tee /etc/apt/keyrings/rspamd.gpg > /dev/null
        echo "deb [signed-by=/etc/apt/keyrings/rspamd.gpg] http://rspamd.com/apt-stable/ $CODENAME main" |  tee /etc/apt/sources.list.d/rspamd.list
        echo "deb-src [signed-by=/etc/apt/keyrings/rspamd.gpg] http://rspamd.com/apt-stable/ $CODENAME main"  |  tee -a /etc/apt/sources.list.d/rspamd.list
        apt-get update
        apt-get --no-install-recommends install rspamd
    fi
    wget -O /usr/share/rspamd/www/rspamd.zip $download_Url/install/plugin/mail_sys/rspamd.zip -T 20
    cd /usr/share/rspamd/www
    unzip -o rspamd.zip
}


Install_centos8()
{
  yum install epel-release -y
  # 卸载系统自带的postfix
  if [[ $cpu_arch = "x86_64" && $postfixver != "3.4.9" ]];then
    yum remove postfix -y
    rm -rf /etc/postfix
  fi
  # 安装postfix和postfix-sqlite
  wget -O /tmp/postfix3-3.4.9-1.gf.el8.x86_64.rpm $download_Url/install/plugin/mail_sys/rpm/postfix3-3.4.9-1.gf.el8.x86_64.rpm
  yum localinstall /tmp/postfix3-3.4.9-1.gf.el8.x86_64.rpm -y
  wget -O /tmp/postfix3-sqlite-3.4.9-1.gf.el8.x86_64.rpm $download_Url/install/plugin/mail_sys/rpm/postfix3-sqlite-3.4.9-1.gf.el8.x86_64.rpm
  yum localinstall /tmp/postfix3-sqlite-3.4.9-1.gf.el8.x86_64.rpm -y
  if [[ ! -f "/usr/sbin/postfix" ]]; then
    yum install postfix -y
    yum install postfix-sqlite -y
  fi
  # 安装dovecot和dovecot-sieve
  yum install dovecot-pigeonhole -y
#  wget -O /tmp/dovecot23-2.3.10-1.gf.el8.x86_64.rpm $download_Url/install/plugin/mail_sys/rpm/dovecot23-2.3.10-1.gf.el8.x86_64.rpm
#  yum localinstall /tmp/dovecot23-2.3.10-1.gf.el8.x86_64.rpm -y
  if [[ ! -f "/usr/sbin/dovecot" ]]; then
    yum install dovecot -y
  fi
  # 安装opendkim
#  安装rspamd
  if [ $ping_url != "200" ]; then
      Install_rspamd_rpm
  else
        install_rspamd
  fi
  yum install cyrus-sasl-plain libsodium libwins -y
}

Install_ubuntu()
{
  hostname=`hostname`
  # 安装postfix和postfix-sqlite
  debconf-set-selections <<< "postfix postfix/mailname string ${hostname}"
  debconf-set-selections <<< "postfix postfix/main_mailer_type string 'Internet Site'"
  export DEBIAN_FRONTEND=noninteractive
  apt install postfix -y --allow-downgrades --allow-remove-essential --allow-change-held-packages
  apt install postfix-sqlite -y --allow-downgrades --allow-remove-essential --allow-change-held-packages
  apt install sqlite -y --allow-downgrades --allow-remove-essential --allow-change-held-packages
  # 安装dovecot和dovecot-sieve
  apt install dovecot-core dovecot-pop3d dovecot-imapd dovecot-lmtpd dovecot-sqlite dovecot-sieve -y --allow-downgrades --allow-remove-essential --allow-change-held-packages
  # 安装opendkim
#  apt install -y opendkim opendkim-tools
#  wget -O /etc/opendkim.zip $download_Url/install/plugin/mail_sys_en/opendkim.zip -T 10
#  rm -rf /etc/opendkim_old
#  mv /etc/opendkim /etc/opendkim_old
#  unzip -d /etc/ /etc/opendkim.zip
#  chown -R opendkim.opendkim /etc/opendkim
  #  安装rspamd
  if [ $ping_url != "200" ]; then
      Install_rspamd_rpm
  else
      install_rspamd
  fi
#  wget -O- https://rspamd.com/apt-stable/gpg.key | apt-key add -
#  echo "deb [arch=amd64] http://rspamd.com/apt-stable/ buster main" > /etc/apt/sources.list.d/rspamd.list
#  echo "deb-src [arch=amd64] http://rspamd.com/apt-stable/ buster main" >> /etc/apt/sources.list.d/rspamd.list
#  apt -y update
#  wget http://ftp.br.debian.org/debian/pool/main/i/icu/libicu63_63.2-3_amd64.deb
#  sudo apt install ./libicu63_63.2-3_amd64.deb
#  rm -f ./libicu63_63.2-3_amd64.deb
#  apt install rspamd -y
  # apt install cyrus-sasl-plain libhyperscan5 -y
  apt install cyrus-sasl-plain -y
}


Install()
{
  if [ ! -d /www/server/panel/plugin/mail_sys ];then
    mkdir -p $pluginPath
    mkdir -p $pluginStaticPath

  # 调整顺序
  filesize=`ls -l /etc/dovecot/dh.pem | awk '{print $5}'`
  echo $filesize

  if [ ! -f "/etc/dovecot/dh.pem" ] || [ $filesize -lt 300 ]; then
    openssl dhparam 2048 > /etc/dovecot/dh.pem
  fi

    if [[ $systemver = "7" ]]; then
      Install_centos7
    elif [[ $systemver = "8" ]]; then
      Install_centos8
    else
      Install_ubuntu
    fi
  fi

  # 安装dovecot和dovecot-sieve
  if [ ! -f /etc/dovecot/conf.d/90-sieve.conf ];then
    if [ -f "/usr/bin/apt-get" ];then
      export DEBIAN_FRONTEND=noninteractive
      apt install dovecot-sieve -y
    else
      rm -rf /etc/dovecot_back
      cp -a /etc/dovecot /etc/dovecot_back
      yum remove dovecot -y
      yum install dovecot-pigeonhole -y
      if [ ! -f /usr/sbin/dovecot ]; then
        yum install dovecot -y
      fi
      \cp -a /etc/dovecot_back/* /etc/dovecot
      chown -R vmail:dovecot /etc/dovecot
      chmod -R o-rwx /etc/dovecot

      systemctl enable dovecot
      systemctl restart  dovecot
    fi
  fi
#  filesize=`ls -l /etc/dovecot/dh.pem | awk '{print $5}'`
#  echo $filesize
#
#  if [ ! -f "/etc/dovecot/dh.pem" ] || [ $filesize -lt 300 ]; then
#    openssl dhparam 2048 > /etc/dovecot/dh.pem
#  fi


  echo 'Installing script file...' > $install_tmp

  grep "English" /www/server/panel/config/config.json
  if [ "$?" -ne 0 ];then
    wget -O $pluginPath/mail_sys_main.py $download_Url/install/plugin/mail_sys/mail_sys_main.py -T 20
    wget -O $pluginPath/receive_mail.py $download_Url/install/plugin/mail_sys/receive_mail.py -T 20
    wget -O $pluginPath/index.html $download_Url/install/plugin/mail_sys/index.html -T 20
    wget -O $pluginPath/info.json $download_Url/install/plugin/mail_sys/info.json -T 20
    wget -O $pluginPath/icon.png $download_Url/install/plugin/mail_sys/icon.png -T 20
    wget -O $pluginStaticPath/api.zip $download_Url/install/plugin/mail_sys/api.zip -T 20
    wget -O /www/server/panel/BTPanel/static/ckeditor.zip $download_Url/install/plugin/mail_sys/ckeditor.zip -T 20
  else
    
    wget --no-check-certificate -O /tmp/mail_sys.zip  $download_Url/install/plugin/mail_sys_en/mail_sys.zip -T 20

    unzip -o /tmp/mail_sys.zip -d /www/server/panel/plugin/
    rm -f /tmp/mail_sys.zip

#    wget -O $pluginPath/install.sh $download_Url/install/plugin/mail_sys_en/install.sh -T 20
#    wget -O $pluginPath/mail_sys_main.py $download_Url/install/plugin/mail_sys_en/mail_sys_main.py -T 20
#    wget -O $pluginPath/mail_server_init.py $download_Url/install/plugin/mail_sys_en/mail_server_init.py -T 20
#    wget -O $pluginPath/receive_mail.py $download_Url/install/plugin/mail_sys_en/receive_mail.py -T 20
#    wget -O $pluginPath/index.html $download_Url/install/plugin/mail_sys_en/index.html -T 20
#    wget -O $pluginPath/info.json $download_Url/install/plugin/mail_sys_en/info.json -T 20
#    wget -O $pluginPath/icon.png $download_Url/install/plugin/mail_sys_en/icon.png -T 20
#    wget -O $pluginPath/services_file.txt $download_Url/install/plugin/mail_sys_en/services_file.txt -T 20

    wget -O $pluginStaticPath/api.zip $download_Url/install/plugin/mail_sys_en/api.zip -T 20
    wget -O /www/server/panel/BTPanel/static/ckeditor.zip $download_Url/install/plugin/mail_sys_en/ckeditor.zip -T 20
  fi
  #	#测试用
#  unzip -o /www/server/panel/plugin/mail_sys.zip -d /www/server/panel/plugin/


  if [ ! -d "/www/server/panel/BTPanel/static/ckeditor" ]; then
    unzip /www/server/panel/BTPanel/static/ckeditor.zip -d /www/server/panel/BTPanel/static
  fi

  echo 'The installation is complete' > $install_tmp
}

#更新
Update()
{
  grep "English" /www/server/panel/config/config.json
  if [ "$?" -ne 0 ];then
    wget -O $pluginPath/mail_sys_main.py $download_Url/install/plugin/mail_sys/mail_sys_main.py -T 20
    wget -O $pluginPath/receive_mail.py $download_Url/install/plugin/mail_sys/receive_mail.py -T 20
    wget -O $pluginPath/index.html $download_Url/install/plugin/mail_sys/index.html -T 20
    wget -O $pluginPath/info.json $download_Url/install/plugin/mail_sys/info.json -T 20
    wget -O $pluginPath/icon.png $download_Url/install/plugin/mail_sys/icon.png -T 20
    wget -O $pluginStaticPath/api.zip $download_Url/install/plugin/mail_sys/api.zip -T 20
    wget -O /www/server/panel/BTPanel/static/ckeditor.zip $download_Url/install/plugin/mail_sys/ckeditor.zip -T 20
  else
#    wget -O $pluginPath/install.sh $download_Url/install/plugin/mail_sys_en/install.sh -T 20
#    wget -O $pluginPath/mail_server_init.py $download_Url/install/plugin/mail_sys_en/mail_server_init.py -T 20
#    wget -O $pluginPath/mail_sys_main.py $download_Url/install/plugin/mail_sys_en/mail_sys_main.py -T 20
#    wget -O $pluginPath/receive_mail.py $download_Url/install/plugin/mail_sys_en/receive_mail.py -T 20
#    wget -O $pluginPath/index.html $download_Url/install/plugin/mail_sys_en/index.html -T 20
#    wget -O $pluginPath/info.json $download_Url/install/plugin/mail_sys_en/info.json -T 20
#    wget -O $pluginPath/icon.png $download_Url/install/plugin/mail_sys_en/icon.png -T 20
#    wget -O $pluginPath/services_file.txt $download_Url/install/plugin/mail_sys_en/services_file.txt -T 20
    

    wget --no-check-certificate -O /tmp/mail_sys.zip  $download_Url/install/plugin/mail_sys_en/mail_sys.zip -T 20
    unzip -o /tmp/mail_sys.zip -d /www/server/panel/plugin/
    rm -f /tmp/mail_sys.zip

    wget -O $pluginStaticPath/api.zip $download_Url/install/plugin/mail_sys_en/api.zip -T 20
    wget -O /www/server/panel/BTPanel/static/ckeditor.zip $download_Url/install/plugin/mail_sys_en/ckeditor.zip -T 20
  fi
  if [ -d "/www/server/panel/BTPanel/static/ckeditor" ]; then
    rm -rf /www/server/panel/BTPanel/static/ckeditor
    unzip /www/server/panel/BTPanel/static/ckeditor.zip -d /www/server/panel/BTPanel/static
  fi
}

#卸载
Uninstall()
{
  if [[ $systemver = "7" ]];then
    yum remove postfix -y
    yum remove dovecot -y
    yum remove opendkim -y
    yum remove rspamd -y
    yum remove dovecot-pigeonhole -y
  elif [ $systemver = "8" ]; then
    yum remove postfix -y
    yum remove dovecot -y
    yum remove opendkim -y
    yum remove rspamd -y
    yum remove dovecot-pigeonhole -y
  else
    export DEBIAN_FRONTEND=noninteractive
    apt remove postfix postfix-sqlite -y && rm -rf /etc/postfix
    dpkg -P postfix postfix-sqlite
    apt remove dovecot-core dovecot-imapd dovecot-lmtpd dovecot-pop3d dovecot-sqlite dovecot-sieve -y
    dpkg -P dovecot-core dovecot-imapd dovecot-lmtpd dovecot-pop3d dovecot-sqlite dovecot-sieve
    apt remove opendkim opendkim-tools -y
    dpkg -P opendkim opendkim-tools
    apt remove rspamd -y
    dpkg -P rspamd
  fi

  rm -rf /etc/postfix
  rm -rf /etc/dovecot
  rm -rf /etc/opendkim
  rm -rf /usr/share/rspamd/www
  rm -rf $pluginPath

  # 移动/www/vmail目录到  /www/vmail_日期  目录下
  if [ -d "/www/vmail" ]; then
      current_date=$(date +%Y%m%d_%H%M%S)
      random_number=$RANDOM
      new_dir="/www/vmail_${current_date}_${random_number}"

      if [ -d "$new_dir" ]; then
          echo "Warning: The target directory $new_dir already exists. To avoid data loss, the operation is terminated."
          exit 1
      else
          mv /www/vmail "$new_dir"
          echo "/www/vmail directory successfully moved to $new_dir"
      fi
  fi

}





#操作判断
if [ "${1}" == 'install' ];then
  Install
  echo '1' > /www/server/panel/data/reload.pl
elif  [ "${1}" == 'update' ];then
  Update
elif [ "${1}" == 'uninstall' ];then
  Uninstall
elif [ "${1}" == 'rspamd' ];then
  install_rspamd
fi
