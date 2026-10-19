const test = require('node:test');
const assert = require('node:assert');
const { greet } = require('./greet');

test('greets the world by default', () => {
  assert.strictEqual(greet(), 'Hey, world!');
});

test('greets by name', () => {
  assert.strictEqual(greet('Ada'), 'Hey, Ada!');
});

test('trims surrounding whitespace from the name', () => {
  assert.strictEqual(greet('  bob  '), 'Hey, bob!');
  assert.strictEqual(greet('\tAda\n'), 'Hey, Ada!');
});
