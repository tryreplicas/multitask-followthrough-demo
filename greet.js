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

module.exports = { greet, farewell, shout, wave };
