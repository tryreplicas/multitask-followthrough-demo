function greet(name = 'world') {
  return `Hey, ${name}!`;
}

function farewell(name) {
  return `Goodbye, ${name}!`;
}

module.exports = { greet, farewell };
