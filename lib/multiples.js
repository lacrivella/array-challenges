function multiples(n) {
  const array = [];
  for(let i = 1; i < 100; i++) {
    if(i % n === 0) {
      array.push(i);
    }
  }
  return array;
}

module.exports = { multiples };
