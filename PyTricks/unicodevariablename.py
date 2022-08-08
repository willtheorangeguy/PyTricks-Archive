# Python 3 allows unicode
# variable names:

>>> π = math.pi
>>> class Spin̈alTap: pass
>>> Spin̈alTap()
<Spin̈alTap object at 0x10e58d908>

# Only letter-like characters
# work, however:

>>> 🍺 = "beer"
SyntaxError:
"invalid character in identifier"
