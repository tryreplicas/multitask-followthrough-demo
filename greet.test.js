const test = require('node:test');
const assert = require('node:assert');
const { greet, whisper } = require('./greet');

test('greets the world by default', () => {
  assert.strictEqual(greet(), 'Hey, world!');
});

test('greets by name', () => {
  assert.strictEqual(greet('Ada'), 'Hey, Ada!');
});

test('whispers the greeting in lower case', () => {
  assert.strictEqual(whisper('Ada'), 'hey, ada!');
  assert.strictEqual(whisper(), 'hey, world!');
});
