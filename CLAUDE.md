# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PyTricks Archive is a static educational repository that archives Python tricks from Dan Badder's Real Python email newsletter. There is no runtime application, no build step, and no package dependencies — it is purely `.py` files containing documented code examples and a companion static website on a separate branch.

## Repository Structure

- `PyTricks/` — 31 Python files, one per newsletter trick. Each file contains verbatim email content formatted as inline comments and Python REPL-style examples (`>>>`).
- `docs/` — Static assets and legal documents for the GitHub Pages website.
- `.github/agents/` — Specialized Copilot agent personas (lint, test, docs, api).
- `gh-pages` branch — Hosts the companion website at `https://willtheorangeguy.github.io/PyTricks-Archive/`. It is a separate branch and is not present in this working tree.

## Development Commands

No install or build step is needed.

```bash
# Lint (auto-fix)
ruff check . --fix

# Format
black .

# Run tests
pytest

# Run a single test file
pytest tests/test_filename.py

# Run a single test function
pytest tests/test_filename.py::test_function_name
```

Linting and formatting configurations are defined in `pyproject.toml` (if present). Both `ruff` and `black` must pass before committing.

## CI

The only active GitHub Actions workflow is `.github/workflows/gitleaks.yml`, which scans for secrets on every push and pull request. DeepSource runs separately and applies `prettier` formatting to non-Python files.

## PyTrick File Conventions

Each file in `PyTricks/` follows this pattern:

- Filename is a lowercase, no-separator description of the trick (e.g., `listcomprehensions.py`, `isvsequals.py`).
- Content is the verbatim newsletter text, presented as comments and Python REPL sessions using `>>>` prompts.
- No imports, no functions, no classes — just illustrative code snippets with comment narration.

## Adding a New PyTrick

Adding a trick requires changes in three places:

1. Create `PyTricks/<trickname>.py` with verbatim newsletter content.
2. Add a corresponding entry on the `gh-pages` branch website (separate branch checkout required).
3. Update the Table of Contents table in `README.md` with links to both the `.py` file and the web anchor.

## Code Conventions (for any new Python code)

From `.github/agents/`:

- Functions: `snake_case`
- Classes: `PascalCase`
- Constants: `UPPER_SNAKE_CASE`
- Python 3.9+ minimum target

## Tests

Tests live in `tests/` (not yet populated). Test files must be named `test_*.py` and test functions `test_*`. Use `pytest` and `pytest.raises` for exception testing.

## Branching

Contribute via GitHub Flow: create a branch from `main`, commit, open a pull request. The `gh-pages` branch is managed separately and contains only website source files.
