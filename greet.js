function greet(name = 'world') {
  return `Hey, ${name}!`;
}

function farewell(name = 'friend') {
  return `Bye, ${name}!`;
}

function shout(name) {
  return greet(name).toUpperCase();
}

module.exports = { greet, farewell, shout };
