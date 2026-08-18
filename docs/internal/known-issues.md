# Known Issues — PyTricks-Archive

Concrete defects and gaps found while writing this repository's documentation in
August 2026. **Nothing here was changed** — each one needs a code, configuration, or
licensing decision rather than a documentation one.

Ordered by severity. See [`docs/roadmap.md`](../roadmap.md) for the narrative version,
which also covers deliberate non-goals.


**4 open:** 2 medium, 2 low.

## 1. CC BY 4.0 is applied to a third party's newsletter content

**Severity:** Medium  
**Where:** `CONTENT_LICENSE.md`

**What:** The repository ships a Creative Commons Attribution 4.0 licence covering the content. The content is 31 snippets from the PyTricks newsletter, written and published by Dan Bader through Real Python.

**Why it matters:** CC BY is a **grant**, and these were not this repository's to grant. This is the clearest case of the three found in this batch: unlike US federal works, which are generally free of copyright, or PC part lists, which are closer to fact than expression, a newsletter's curated snippets are someone else's creative work. Offering them under a licence that permits redistribution asserts a right the archive does not hold.

**Suggested fix:** Replace with a provenance notice on the model of the `*-Transcripts` repositories: state where the material came from, that no rights in it are claimed, that MIT covers only the repository's own tooling, and point readers at Real Python. The README now carries an Attribution section saying exactly that; `CONTENT_LICENSE.md` still needs replacing.

## 2. The hero GIF never rendered — a /blob/ URL serves HTML, not an image

**Severity:** Medium  
**Where:** `README.md`, the screenshot image

**What:** It pointed at `github.com/willtheorangeguy/PyTricks-Archive/blob/main/docs/images/welcome.gif`. A `/blob/` URL returns a GitHub HTML page rather than image bytes.

**Why it matters:** The animated demo has not been displaying on the repository front page. Third instance of this fault, after `Moms-Canning-Timer` and `Maximum-PC-Builds-Archive`.

**Suggested fix:** Fixed in this sweep — the hero and logo now come from `.github/icons/PyTricks-Archive/` via `raw.githubusercontent.com`.

## 3. Nothing verifies the snippets still run

**Severity:** Low  
**Where:** `.github/workflows/` — only `gitleaks.yml` exists

**What:** 31 standalone Python files, and no workflow executes any of them.

**Why it matters:** Most demonstrate language features rather than library APIs, so most should survive a Python upgrade — but a trick that broke would sit in the archive looking authoritative. For a reference people copy from, silently-wrong is the failure mode that matters.

**Suggested fix:** Run every file in CI across two or three Python versions. They take no arguments and have no dependencies, so it is close to free.

## 4. The archive cannot say what it is missing

**Severity:** Low  
**Where:** `PyTricks/`, the index

**What:** 31 files, with nothing recording which newsletter issues they came from, when they were published, or which were not kept.

**Why it matters:** An archive that cannot state its own coverage is hard to rely on — a reader cannot tell whether a trick is absent because it was never sent or because it was never saved.

**Suggested fix:** Record the issue date or number per trick, and note that the collection is partial.


---

## Also, across every repository

**`.bandit` is present on disk but untracked in git.** Verified in PyWorkout, treklogger,
skyscanner-cli, booking-cli, piggy, and aibot — the config file exists locally in each but
`git ls-files` does not know about it, so none of it reached GitHub.

The August 2026 security sweep therefore looks complete locally and landed nowhere. Worth
checking across all 44 repositories it covered.
