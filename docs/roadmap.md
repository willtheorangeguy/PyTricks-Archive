# PyTricks Archive — Roadmap

Gaps and limitations, observed from the repository. Concrete defects are in
[`internal/known-issues.md`](./internal/known-issues.md).

## Licensing needs settling

The repository ships a Creative Commons Attribution licence over content it did not author.
That is the item worth resolving first — see
[`internal/known-issues.md`](./internal/known-issues.md).

## Gaps

**Nothing checks the snippets still run.** The only workflow is secret scanning. These are
mostly language features rather than library APIs, so most should survive — but a trick that
broke on a newer Python would sit here unnoticed. Running each file in CI across a couple of
Python versions would be cheap and would catch exactly that.

**Coverage is unrecorded.** 31 files, and nothing states which newsletter issues they came
from or which are missing. An archive that cannot say what it does not have is hard to trust
as an archive.

**The index is maintained by hand.** It lists every trick with links to the file and the
website; nothing checks those links resolve or that every file appears. Generating it from the
directory would remove a class of drift.

**No dates.** Nothing records when a trick was published, so there is no way to read them in
order or tell an old one from a recent one.

**Alphabetical order only.** Related topics do not cluster — the dictionary tricks are spread
across the listing — and there are no tags or categories.

## Non-goals

- **Being the source.** [Real Python](https://realpython.com/) is where these come from and
  where new ones appear.
- **Explaining the tricks.** The files demonstrate; the newsletter is where the prose lives.
- **Completeness.** This is what one reader kept, not a full run.
