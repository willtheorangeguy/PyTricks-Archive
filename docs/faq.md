# PyTricks Archive — FAQ

## Where did these come from?

The PyTricks newsletter, written by Dan Bader and published through
[Real Python](https://realpython.com/). This is one reader's archive of the snippets they
found useful.

## Is this official?

No. It is unofficial and personal. The repository did not author the tricks and holds no
rights in them.

## Can I reuse the code?

Attribute Dan Bader, and prefer linking to [Real Python](https://realpython.com/) over
copying. The repository ships a content licence that does not straightforwardly apply to
material it did not author — see [`internal/known-issues.md`](./internal/known-issues.md).

Short techniques like swapping two variables are not really ownable in any practical sense;
the collection and its explanations are a different matter.

## Should I subscribe to the newsletter?

If you find these useful, yes. That is the honest answer for an archive of someone else's
work.

## Is every PyTrick here?

No — 31 files, which is what the archiver kept rather than everything ever sent. Nothing
records which issues are missing.

## Do the snippets still work?

Most should; they are mostly language features rather than library APIs. But nothing runs
them, so a trick that broke on a newer Python would sit here unnoticed. Treat an old snippet
as worth checking.

## Do I need to install anything?

No. Every file is standard-library Python and runs directly:

```bash
python PyTricks/listcomprehensions.py
```

## Why are some filenames dotted?

`contextlib.suppress.py` and `itertools.permutations.py` name the standard-library member
being demonstrated. It reads oddly as a filename and is unambiguous, which is the better
trade for an archive.

## How do I find a specific trick?

Use the [index](./tricks.md) if you remember the subject line, or browse `PyTricks/` if you
remember the topic — filenames are descriptive.

## Is there a website?

Yes, at <https://willtheorangeguy.github.io/PyTricks-Archive/>, built from `gh-pages` with an
anchor per trick.
