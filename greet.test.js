const test = require('node:test');
const assert = require('node:assert');
const { greet, farewell } = require('./greet');

test('greets the world by default', () => {
  assert.strictEqual(greet(), 'Hi, world!');
});

test('greets by name', () => {
  assert.strictEqual(greet('Ada'), 'Hi, Ada!');
});

test('says goodbye to the world by default', () => {
  assert.strictEqual(farewell(), 'Goodbye, world!');
});

test('says goodbye by name', () => {
  assert.strictEqual(farewell('Ada'), 'Goodbye, Ada!');
});
