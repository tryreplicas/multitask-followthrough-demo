function normalizeName(name) {
  return String(name ?? '').trim() || 'world';
}

function greet(name) {
  return `Hi, ${normalizeName(name)}!`;
}

function farewell(name) {
  return `Goodbye, ${normalizeName(name)}!`;
}

module.exports = { greet, farewell };
