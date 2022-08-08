# Python's list slice syntax can be used without indices
# for a few fun and useful things:

# You can clear all elements from a list:
>>> lst = [1, 2, 3, 4, 5]
>>> del lst[:]
>>> lst
[]

# You can replace all elements of a list
# without creating a new list object:
>>> a = lst
>>> lst[:] = [7, 8, 9]
>>> lst
[7, 8, 9]
>>> a
[7, 8, 9]
>>> a is lst
True

# You can also create a (shallow) copy of a list:
>>> b = lst[:]
>>> b
[7, 8, 9]
>>> b is lst
False
