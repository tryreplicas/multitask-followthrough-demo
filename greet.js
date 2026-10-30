function greet(name = 'world') {
  return `Hey, ${name}!`;
}

function farewell(name = 'friend') {
  return `Bye, ${name}!`;
}

module.exports = { greet, farewell };
