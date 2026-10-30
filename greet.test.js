const test = require('node:test');
const assert = require('node:assert');
const { greet, farewell, shout } = require('./greet');

test('greets the world by default', () => {
  assert.strictEqual(greet(), 'Hey, world!');
});

test('greets by name', () => {
  assert.strictEqual(greet('Ada'), 'Hey, Ada!');
});

test('shout: by name with three exclamation marks', () => {
  assert.strictEqual(shout('Ada'), 'HEY, ADA!!!');
});

test('shout: default greeting', () => {
  assert.strictEqual(shout(), 'HEY, WORLD!!!');
});

test('says farewell by name', () => {
  assert.strictEqual(farewell('Ada'), 'Bye, Ada!');
});

test('says farewell to a friend by default', () => {
  assert.strictEqual(farewell(), 'Bye, friend!');
});
