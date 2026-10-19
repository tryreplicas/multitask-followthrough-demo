function greet(name = 'world') {
  return `Hey, ${name}!`;
}

function excited(name = 'world') {
  return greet(name).replace(/!$/, '!!!');
}

function whisper(name = 'world') {
  return greet(name).toLowerCase();
}

module.exports = { greet, whisper };
