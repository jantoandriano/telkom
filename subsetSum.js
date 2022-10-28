function getSubsets(array, sum) {
  function fork(i = 0, s = 0, t = []) {
    if (s === sum) {
      result.push(t);
      return;
    }
    if (i === array.length) {
      return;
    }
    if (s + array[i] <= sum) {
      fork(i + 1, s + array[i], t.concat(array[i]));
    }
    fork(i + 1, s, t);
  }

  var result = [];
  fork();
  return result;
}

console.log(getSubsets([1, 2, 4, 5, 9], 7));
