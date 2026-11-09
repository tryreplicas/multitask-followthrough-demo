function greet(name = 'world') {
  return `Hey, ${name}!`;
}

function farewell(name = 'friend') {
  return `Bye, ${name}!`;
}

function shout(name) {
  return greet(name).toUpperCase();
}

function wave(name) {
  return 'hi ' + greet(name);
}

function whisper(name) {
  return greet(name).toLowerCase();
}

function cheer(name) {
  return greet(name) + '!';
}

module.exports = { greet, farewell, shout, wave, whisper, cheer };
