# Python's `for` and `while` loops
# support an `else` clause that executes
# only if the loops terminates without
# hitting a `break` statement.

def contains(haystack, needle):
    """
    Throw a ValueError if `needle` not
    in `haystack`.
    """
    for item in haystack:
        if item == needle:
            break
    else:
        # The `else` here is a
        # "completion clause" that runs
        # only if the loop ran to completion
        # without hitting a `break` statement.
        raise ValueError('Needle not found')


>>> contains([23, 'needle', 0xbadc0ffee], 'needle')
None

>>> contains([23, 42, 0xbadc0ffee], 'needle')
ValueError: "Needle not found"


# Personally, I'm not a fan of the `else`
# "completion clause" in loops because
# I find it confusing. I'd rather do
# something like this:
def better_contains(haystack, needle):
    for item in haystack:
        if item == needle:
            return
    raise ValueError('Needle not found')

# Note: Typically you'd write something
# like this to do a membership test,
# which is much more Pythonic:
if needle not in haystack:
    raise ValueError('Needle not found')
