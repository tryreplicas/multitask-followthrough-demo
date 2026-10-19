const test = require('node:test');
const assert = require('node:assert');
const { greet, shout } = require('./greet');

test('greets the world by default', () => {
  assert.strictEqual(greet(), 'Hey, world!');
});

test('greets by name', () => {
  assert.strictEqual(greet('Ada'), 'Hey, Ada!');
});

test('shout returns the greeting in uppercase', () => {
  assert.strictEqual(shout('Ada'), 'HEY, ADA!');
});

test('shout defaults to the world', () => {
  assert.strictEqual(shout(), 'HEY, WORLD!');
});
