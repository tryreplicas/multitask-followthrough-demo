const test = require('node:test');
const assert = require('node:assert');
const { greet, farewell } = require('./greet');

test('greets the world by default', () => {
  assert.strictEqual(greet(), 'Hey, world!');
});

test('greets by name', () => {
  assert.strictEqual(greet('Ada'), 'Hey, Ada!');
});

test('says goodbye by name', () => {
  assert.strictEqual(farewell('Ada'), 'Goodbye, Ada!');
});
