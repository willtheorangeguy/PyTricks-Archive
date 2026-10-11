# PyTricks Archive — Usage

## Finding a trick

Two routes, depending on what you remember:

**You remember the subject line** — use the [index](./tricks.md). It is sorted by filename but
the left column is the original newsletter subject, which is usually what sticks.

**You remember the topic** — browse `PyTricks/` directly. Filenames are descriptive
(`listcomprehensions.py`, `sortdictbyvalue.py`, `isvsequals.py`), so the folder listing works
as its own index.

## Running one

Every file is standalone, standard-library Python:

```bash
python PyTricks/listcomprehensions.py
```

No installation, no dependencies, no arguments. Each file demonstrates its trick when run and
is short enough to read in full.

## Reading rather than running

Most of the value is in reading. The files are small and self-contained, so opening one is
usually faster than running it.

```bash
less PyTricks/isvsequals.py
```

## Searching

Since everything is plain Python in one folder, ordinary tools work:

```bash
grep -rl "namedtuple" PyTricks/
```

That is worth knowing — it is the practical advantage of an archive over a mailbox.

## The website

The same tricks are published at
<https://willtheorangeguy.github.io/PyTricks-Archive/>, with an anchor per trick so a
specific one can be linked directly. The index carries those links.

## Downloading

```
main       the Python files
gh-pages   the built website
```

Both are downloadable as ZIPs from GitHub.

## Before you reuse a snippet

These are Dan Bader's work, archived here for personal reference. Attribute him, and prefer
linking to [Real Python](https://realpython.com/) over copying. See [FAQ](./faq.md).
