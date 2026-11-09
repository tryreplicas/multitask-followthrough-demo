const test = require('node:test');
const assert = require('node:assert');
const { greet, farewell, shout, wave } = require('./greet');

test('wave prefixes the greeting with hi', () => {
  assert.strictEqual(wave('Ada'), 'hi Hey, Ada!');
  assert.strictEqual(wave(), 'hi Hey, world!');
});

test('greets the world by default', () => {
  assert.strictEqual(greet(), 'Hey, world!');
});

test('greets by name', () => {
  assert.strictEqual(greet('Ada'), 'Hey, Ada!');
});

test('shouts the greeting by name', () => {
  assert.strictEqual(shout('Ada'), 'HEY, ADA!');
});

test('shouts the default greeting', () => {
  assert.strictEqual(shout(), 'HEY, WORLD!');
});

test('says farewell by name', () => {
  assert.strictEqual(farewell('Ada'), 'Bye, Ada!');
});

test('says farewell to a friend by default', () => {
  assert.strictEqual(farewell(), 'Bye, friend!');
});
