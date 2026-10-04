const test = require('node:test');
const assert = require('node:assert');
const { greet } = require('./greet');

test('greets the world by default', () => {
  assert.strictEqual(greet(), 'Hi, world!');
});

test('greets by name', () => {
  assert.strictEqual(greet('Ada'), 'Hi, Ada!');
});
