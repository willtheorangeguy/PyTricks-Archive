# When To Use __repr__ vs __str__?
# Emulate what the std lib does:
>>> import datetime
>>> today = datetime.date.today()

# Result of __str__ should be readable:
>>> str(today)
'2017-02-02'

# Result of __repr__ should be unambiguous:
>>> repr(today)
'datetime.date(2017, 2, 2)'

# Python interpreter sessions use 
# __repr__ to inspect objects:
>>> today
datetime.date(2017, 2, 2)
