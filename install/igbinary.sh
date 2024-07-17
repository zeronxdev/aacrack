#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH
igbinaryV=3.2.14
runPath=/root
public_file=/www/server/panel/install/public.sh
[ ! -f $public_file ] && wget -O $public_file https://download.bt.cn/install/public.sh -T 5;

publicFileMd5=$(md5sum ${public_file}|awk '{print $1}')
md5check="8e49712d1fd332801443f8b6fd7f9208"
[ "${publicFileMd5}" != "${md5check}"  ] && wget -O $public_file https://download.bt.cn/install/public.sh -T 5;

. $public_file
download_Url=$NODE_URL

if [ -z "${cpuCore}" ]; then
	cpuCore="1"
fi

Error_Msg(){
	if [ "${actionType}" == "install" ];then
		AC_TYPE="安装"
	elif [ "${actionType}" == "update" ]; then
		AC_TYPE="升级"
	fi

	EN_CHECK=$(cat /www/server/panel/config/config.json |grep English)
	echo '========================================================'
	GetSysInfo
	echo -e "ERROR: igbinary-${igbinaryV} ${actionType} failed.";
	if [ "${EN_CHECK}" ];then
		echo -e "Please submit to https://forum.aapanel.com for help"
	else 
		echo -e "${AC_TYPE}失败，请截图以上报错信息发帖至论坛www.bt.cn/bbs求助"
	fi
	exit 1;
}

ext_Path(){
	case "${version}" in 
		'70')
		extFile='/www/server/php/70/lib/php/extensions/no-debug-non-zts-20151012/igbinary.so'
		;;
		'71')
		extFile='/www/server/php/71/lib/php/extensions/no-debug-non-zts-20160303/igbinary.so'
		;;
		'72')
		extFile='/www/server/php/72/lib/php/extensions/no-debug-non-zts-20170718/igbinary.so'
		;;
		'73')
		extFile='/www/server/php/73/lib/php/extensions/no-debug-non-zts-20180731/igbinary.so'
		;;
		'74')
		extFile='/www/server/php/74/lib/php/extensions/no-debug-non-zts-20190902/igbinary.so'
		;;
		'80')
		extFile='/www/server/php/80/lib/php/extensions/no-debug-non-zts-20200930/igbinary.so'
		;;
		'81')
		extFile='/www/server/php/81/lib/php/extensions/no-debug-non-zts-20210902/igbinary.so'
		;;
		'82')
		extFile='/www/server/php/82/lib/php/extensions/no-debug-non-zts-20220829/igbinary.so'
		;;
		'83')
		extFile='/www/server/php/83/lib/php/extensions/no-debug-non-zts-20230831/igbinary.so'
		;;
	esac
}
Install_Igbinary()
{

	if [ ! -d /www/server/php/$version ];then
		return;
	fi
	
	if [ ! -f "/www/server/php/$version/bin/php-config" ];then
		echo "php-$vphp 未安装,请选择其它版本!"
		echo "php-$vphp not install, Plese select other version!"
		return
	fi
	
	isInstall=`cat /www/server/php/$version/etc/php.ini|grep 'igbinary.so'`
	if [ "${isInstall}" != "" ];then
		echo "php-$vphp 已安装过igbinary,请选择其它版本!"
		echo "php-$vphp not install, Plese select other version!"
		return
	fi
	

	if [ ! -f "${extFile}" ];then		
		wget $download_Url/src/igbinary-$igbinaryV.tgz -T 5
		tar zxvf igbinary-$igbinaryV.tgz
		rm -f igbinary-$igbinaryV.tgz
		cd igbinary-$igbinaryV
		/www/server/php/$version/bin/phpize
		./configure --with-php-config=/www/server/php/$version/bin/php-config
		make && make install
		cd ../
		rm -rf igbinary-$igbinaryV*
	fi
	
	if [ ! -f "${extFile}" ];then
		GetSysInfo
		echo -e "ERROR: igbinary-$version installation failed.";
		echo -e "安装失败，请截图以上报错信息发帖至论坛www.bt.cn/bbs求助"
		exit 1
	fi
	
	echo -e "extension = ${extFile}\n" >> /www/server/php/$version/etc/php.ini
	if [ -f "/www/server/php/$version/etc/php-cli.ini" ]; then
		echo -e "extension = ${extFile}\n" >> /www/server/php/$version/etc/php-cli.ini
	fi

	LOAD_CHECK=$(/www/server/php/${version}/sbin/php-fpm -t 2>&1|grep $extFile)
	CONF_CHECK_MSG=$(/www/server/php/${version}/sbin/php-fpm -t 2>&1)
	if [ "$LOAD_CHECK" ];then
		GetSysInfo
		echo $CONF_CHECK_MSG
		echo -e "==============================================="
		echo -e "ERROR: igbinary-$version load failed.";
		echo -e "扩展文件加载失败，请截图以上报错信息发帖至论坛www.bt.cn/bbs求助"

		rm -f ${extFile}
		sed -i '/igbinary.so/d' /www/server/php/$version/etc/php.ini
		if [ -f "/www/server/php/$version/etc/php-cli.ini" ]; then
			sed -i '/igbinary.so/d' /www/server/php/$version/etc/php-cli.ini
		fi
		exit 1
	fi
	/etc/init.d/php-fpm-$version reload
	echo '==============================================='
	echo 'successful!'
}

Uninstall_Igbinary()
{	
	if [ ! -f "/www/server/php/$version/bin/php-config" ];then
		echo "php-$vphp 未安装,请选择其它版本!"
		echo "php-$vphp not install, Plese select other version!"
		return
	fi
	
	isInstall=`cat /www/server/php/$version/etc/php.ini|grep 'igbinary.so'`
	if [ "${isInstall}" = "" ];then
		echo "php-$vphp 未安装igbinary,请选择其它版本!"
		echo "php-$vphp not install igbinary, Plese select other version!"
		return
	fi
	
	sed -i '/igbinary.so/d' /www/server/php/$version/etc/php.ini
	if [ -f "/www/server/php/$version/etc/php-cli.ini" ]; then
		sed -i '/igbinary.so/d' /www/server/php/$version/etc/php-cli.ini
	fi
	
	/etc/init.d/php-fpm-$version restart
	echo '==============================================='
	echo 'successful!'
}
actionType=$1
version=$2
vphp=${version:0:1}.${version:1:1}

if [ "$actionType" == 'install' ];then
	System_Lib
	ext_Path
	Gcc_Version_Check
	Install_Igbinary
elif [ "$actionType" == 'uninstall' ];then
	Uninstall_Igbinary
fi


