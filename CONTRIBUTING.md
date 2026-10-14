# Contributing

## Running locally

Requirements: [Node.js](https://nodejs.org/) 20 (the version used in CI). There are no dependencies to install.

```sh
node -e "console.log(require('./greet').greet('Ada'))"  # try greet()
node --test                                            # run the tests
```

## Opening a pull request

1. Branch from `main` and keep each change small and focused.
2. Add an entry under `## Unreleased` in `CHANGELOG.md` — CI fails without one.
3. Run `node --test` and make sure it passes.
4. Open a PR against `main` describing what changed and why, and make sure CI is green.
