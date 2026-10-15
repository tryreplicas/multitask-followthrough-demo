# multitask-followthrough-demo
Test repo for Replicas Multitask PR follow-through

## Troubleshooting

- **`node --test` fails or finds no tests:** the built-in test runner needs a recent Node.js (CI uses Node 20). Check with `node --version` and upgrade if needed. Run it from the repo root so `greet.test.js` is found.
- **`Cannot find module './greet'`:** run tests from the repo root, where `greet.js` lives. There are no dependencies, so no `npm install` is needed (the repo has no `package.json`).
- **CI `changelog` job fails:** every pull request must add an entry to `CHANGELOG.md`. Add a line under `## Unreleased` describing your change.
- **Test assertions fail after changing the greeting:** update the expected strings in `greet.test.js` (e.g. `'Hey, world!'`) to match `greet.js`.
