function greet(name = 'world') {
  return `Hey, ${name}!`;
}

function shout(name = 'world') {
  return greet(name).toUpperCase();
}

module.exports = { greet, shout };
