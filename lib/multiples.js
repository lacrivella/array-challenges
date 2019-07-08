function multiples(n) {
  const array = [];
  for(let i = 1; i < 101; i++) {
    if(i % n === 0) {
      array.push(i);
    }
  }
  return array;
}

module.exports = { multiples };
