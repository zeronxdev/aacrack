import sys
from typing import Optional, Type, TypeVar
import traceback
from importlib import import_module

from .base_task import BaseTask
from .util import GET_CLASS, get_client_ip, debug_log


T_CLS = TypeVar('T_CLS', bound=BaseTask)


def load_task_cls_by_function(
    name: str,
    func_name: str,
    is_model: bool = False,
    model_index: str = '',
    args: Optional[dict] = None,
    sub_name: Optional[str] = None,
) -> Optional[Type[T_CLS]]:
    """
    从执行函数的结果中获取任务类
    @param model_index: 模块来源，例如：新场景就是mod
    @param name: 名称
    @param func_name: 函数名称
    @param is_model: 是否在Model中，不在Model中，就应该在插件中
    @param args: 请求这个接口的参数， 默认为空
    @param sub_name: 自分类名称， 如果有，则会和主名称name做拼接
    @return: 返回None 或者有效的任务类
    """
    import PluginLoader
    real_name = name
    if isinstance(sub_name, str):
        real_name = "{}/{}".format(name, sub_name)

    get_obj = GET_CLASS()
    if args is not None and isinstance(args, dict):
        for key, value in args.items():
            setattr(get_obj, key, value)
    try:
        if is_model:
            get_obj.model_index = model_index
            res = PluginLoader.module_run(real_name, func_name, get_obj)
        else:
            get_obj.fun = func_name
            get_obj.s = func_name
            get_obj.client_ip = get_client_ip
            res = PluginLoader.plugin_run(name, func_name, get_obj)
    except:
        debug_log(traceback.format_exc())
        return None
    if isinstance(res, dict):
        return None
    elif isinstance(res, BaseTask):
        return res.__class__
    elif issubclass(res, BaseTask):
        return res
    return None


def load_task_cls_by_path(path: str, cls_name: str) -> Optional[Type[T_CLS]]:
    try:
        module = import_module(path)
        cls = getattr(module, cls_name, None)
        if issubclass(cls, BaseTask):
            return cls
        elif isinstance(cls, BaseTask):
            return cls.__class__
        else:
            return None
    except:
        print(traceback.format_exc())
        print(sys.path)
        debug_log(traceback.format_exc())
        return None
