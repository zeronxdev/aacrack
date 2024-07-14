import sys
import time
from typing import Optional, Callable

if "/www/server/panel/class" not in sys.path:
    sys.path.insert(0, "/www/server/panel/class")


import public
from db import Sql


def write_file(filename: str, s_body: str, mode='w+') -> bool:
    """
    写入文件内容
    @filename 文件名
    @s_body 欲写入的内容
    return bool 若文件不存在则尝试自动创建
    """
    try:
        fp = open(filename, mode=mode)
        fp.write(s_body)
        fp.close()
        return True
    except:
        try:
            fp = open(filename, mode=mode, encoding="utf-8")
            fp.write(s_body)
            fp.close()
            return True
        except:
            return False


def read_file(filename, mode='r') -> Optional[str]:
    """
    读取文件内容
    @filename 文件名
    return string(bin) 若文件不存在，则返回None
    """
    import os
    if not os.path.exists(filename):
        return None
    fp = None
    try:
        fp = open(filename, mode=mode)
        f_body = fp.read()
    except:
        return None
    finally:
        if fp and not fp.closed:
            fp.close()
    return f_body


ExecShell: Callable = public.ExecShell

write_log: Callable = public.WriteLog

Sqlite: Callable = Sql

GET_CLASS: Callable = public.dict_obj

debug_log: Callable = public.print_log

get_config_value: Callable = public.GetConfigValue

get_server_ip: Callable = public.get_server_ip

get_network_ip: Callable = public.get_network_ip

format_date: Callable = public.format_date

public_get_cache_func: Callable = public.get_cache_func

public_set_cache_func: Callable = public.set_cache_func

public_get_user_info: Callable = public.get_user_info

public_http_post = public.httpPost

panel_version = public.version


def get_client_ip() -> str:
    return public.GetClientIp()


class _DB:

    def __call__(self, table: str):
        import db
        with db.Sql() as t:
            t.table(table)
            return t


DB = _DB()
