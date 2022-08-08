# You can check for class
# inheritance relationships 
# with the "issubclass()" built-in:

>>> class BaseClass: pass
>>> class SubClass(BaseClass): pass

>>> issubclass(SubClass, BaseClass)
True
>>> issubclass(SubClass, object)
True
>>> issubclass(BaseClass, SubClass)
False
