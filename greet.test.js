const test = require('node:test');
const assert = require('node:assert');
const { greet, farewell, shout, wave, whisper, cheer, sing, murmur } = require('./greet');

test('sing prefixes the greeting with la la', () => {
  assert.strictEqual(sing('Ada'), 'la la Hey, Ada!');
  assert.strictEqual(sing(), 'la la Hey, world!');
});

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

test('whisper: lowercases the greeting', () => {
  assert.strictEqual(whisper('Ada'), 'hey, ada!');
});

test('cheer: appends an exclamation mark to the greeting', () => {
  assert.strictEqual(cheer('Ada'), 'Hey, Ada!!');
});

test('murmur prefixes the greeting with an ellipsis', () => {
  assert.strictEqual(murmur('Ada'), '... Hey, Ada!');
});
