function greet(name = 'world') {
  return `Hey, ${name}!`;
}

function farewell(name = 'friend') {
  return `Bye, ${name}!`;
}

function shout(name = 'world') {
  return `${greet(name).slice(0, -1).toUpperCase()}!!!`;
}

module.exports = { greet, farewell, shout };
