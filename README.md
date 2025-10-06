# Iruka — Basic Programming (GitHub Classroom Starter)

This repository is the **starter code** for a GitHub Classroom assignment.
It contains two problems and an **autograding workflow** using GitHub Actions.

## Problems
1. **Normalize Name** — `problems/p01/normalize_name.py` and `problems/p01/normalize_name.js`
2. **Valid Parentheses** — `problems/p02/valid_parentheses.py` and `problems/p02/valid_parentheses.js`

> Candidates must write 5–10 lines of *"How I understand the problem & my approach"* at the top of each file (as comments),
> explain edge cases & Big-O, and add at least 5 self tests (they can be comments or prints).

## Autograding
- **Python (pytest)** tests live in `tests/python/`
- **JavaScript (Jest)** tests live in `tests/js/`
- Workflow: `.github/workflows/autograde.yml`

When students push code, GitHub Actions runs tests. Pass/fail will show up in GitHub Classroom.

## Run locally
```bash
# Python
python -m pip install -U pytest
pytest -q

# Node
npm i
npx jest --runInBand
```

## Optional: Hidden tests (advanced)
If you want to keep some tests hidden, store them in a **private repo** and fetch in CI:

1) Create a private repo `<org>/iruka-hidden-tests` containing a `hidden/` folder with tests.
2) Create a classic PAT with `repo` read permissions; save as org secret `HIDDEN_TESTS_TOKEN`.
3) Uncomment the "Fetch hidden tests" step in the workflow.

## License
For internal assessment use only.
