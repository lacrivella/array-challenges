function removeDuplicates(arr) {
  const uniqueSet = new Set(arr);
  const backToArray = [...uniqueSet];
  return backToArray;
}

module.exports = { removeDuplicates };