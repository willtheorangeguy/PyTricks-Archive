# In Python 3.4+ you can use
# contextlib.suppress() to selectively
# ignore specific exceptions:

import contextlib

with contextlib.suppress(FileNotFoundError):
    os.remove('somefile.tmp')

# This is equivalent to:

try:
    os.remove('somefile.tmp')
except FileNotFoundError:
    pass

# contextlib.suppress docstring: 
#
# "Return a context manager that suppresses any 
#  of the specified exceptions if they occur in the body
#  of a with statement and then resumes execution with 
#  the first statement following the end of 
#  the with statement."
