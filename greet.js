function greet(name = 'world') {
  return `Hey, ${name}!`;
}

function excited(name = 'world') {
  return greet(name).replace(/!$/, '!!!');
}

module.exports = { greet, excited };
