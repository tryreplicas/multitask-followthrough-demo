function greet(name = 'world') {
  return `Hi, ${name}!`;
}

function farewell(name = 'world') {
  return `Goodbye, ${name}!`;
}

module.exports = { greet, farewell };
