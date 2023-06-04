function sum(arr, n) {
  if (n === 0) {
    return 0;
  }
  return arr[n - 1] + sum(arr, n - 1);
}

console.assert(sum([1, 2, 3, 4, 5], 2) === 3);
