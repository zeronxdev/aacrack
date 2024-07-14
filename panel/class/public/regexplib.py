import re

# 匹配IP地址
match_ipv4 = re.compile(r'^(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d)$')
match_ipv6 = re.compile(r'^(?:(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4})|(?:(?:[0-9a-fA-F]{1,4}:){1,7}:)|(?:(?:[0-9a-fA-F]{1,4}:){6}:[0-9a-fA-F]{1,4})|(?:(?:[0-9a-fA-F]{1,4}:){5}(?::[0-9a-fA-F]{1,4}){1,2})|(?:(?:[0-9a-fA-F]{1,4}:){4}(?::[0-9a-fA-F]{1,4}){1,3})|(?:(?:[0-9a-fA-F]{1,4}:){3}(?::[0-9a-fA-F]{1,4}){1,4})|(?:(?:[0-9a-fA-F]{1,4}:){2}(?::[0-9a-fA-F]{1,4}){1,5})|(?:(?:[0-9a-fA-F]{1,4}:){1}(?::[0-9a-fA-F]{1,4}){1,6})|(?::(?:(?::[0-9a-fA-F]{1,4}){1,7}|:))')

# 安全文件路径
match_safe_path = re.compile(r'^[\w\s./\-]*$')

# 匹配类私有属性名称
match_class_private_property = re.compile(r'^(?:_\w+)?__\w+')

# HOST基本格式
match_based_host = re.compile(r'^[\w.:\-]+$')

# 抓取URL根路径
find_url_root = re.compile(r'(https|http)://([\w:.\-]+)', re.IGNORECASE)

# 匹配首条PHP Fatal error信息
search_php_first_fatal_error = re.compile(r'PHP Fatal error: \s*([^\r\n]+)')
