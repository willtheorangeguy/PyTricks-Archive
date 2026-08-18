# PyTricks Archive — Architecture

## Layout

```
PyTricks/          31 standalone .py files
docs/              this documentation
```

No package, no build, no dependencies. Each file stands alone and runs on a bare Python
install.

## Filenames carry the topic

Files are named after what they demonstrate — `listcomprehensions.py`, `sortdictbyvalue.py`,
`isvsequals.py` — rather than after the newsletter issue or a date.

That makes the folder listing usable as an index in its own right, and it is why the archive
is still navigable if the index drifts. Sorting is alphabetical, so related topics do not
cluster; the index exists to bridge that.

A few filenames keep a dotted module name — `contextlib.suppress.py`,
`itertools.permutations.py` — matching the standard-library member being shown.

## Two branches

| Branch     | Holds                              |
| ---------- | ---------------------------------- |
| `main`     | The Python files and documentation |
| `gh-pages` | The generated website              |

The website is a derived artefact rendered from the same files, with an anchor per trick so
individual ones can be linked.

## Why files rather than a document

The archive could have been one long Markdown page. Keeping each trick as an executable file
means it can be run, grepped, and linked — and that a snippet which stopped working on a newer
Python would fail visibly rather than sitting wrong in a document.

## Provenance

The tricks come from the PyTricks newsletter, written by Dan Bader and published through
[Real Python](https://realpython.com/). This repository collects them; it does not author
them.

That distinction drives the licensing question in
[`internal/known-issues.md`](./internal/known-issues.md) — a licence applied here cannot cover
material that originated elsewhere.

## No tests, no CI beyond secret scanning

The only workflow is Gitleaks. Nothing runs the snippets, so a trick that no longer works on a
current Python would not be detected. See [Roadmap](./roadmap.md).
