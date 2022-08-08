# Python 3 has a std lib
# module for working with
# IP addresses:

>>> import ipaddress

>>> ipaddress.ip_address('192.168.1.2')
IPv4Address('192.168.1.2')

>>> ipaddress.ip_address('2001:af3::')
IPv6Address('2001:af3::')

# Learn more here:
# https://docs.python.org/3/library/ipaddress.html
