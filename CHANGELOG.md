# Changelog

## Unreleased

- `greet()` now greets with "Hi" instead of "Hello" (e.g. `greet("world")` returns "Hi, world!").
- Added `farewell(name)`, which returns "Goodbye, <name>!" (defaults to "world"), exported alongside `greet`.
- `greet()` and `farewell()` now trim whitespace from `name` and fall back to "world" when it is empty.
