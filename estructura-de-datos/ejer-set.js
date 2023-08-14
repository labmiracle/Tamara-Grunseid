//EJERCIOCIO 1

function isDuplicated(str) {
  const setExample = new Set(str);
  return str.length !== setExample.size;
}

console.log(isDuplicated([1, 2, 3, 4, 5, 6, 7]));
console.log(isDuplicated([1, 2, 3, 4, 4, 6, 7]));

//EJERCICIO 2
function uniqueElemArr(str1, str2) {
  const setExample2 = new Set([...str1, ...str2]);
  return Array.from(setExample2);
}

const str1 = [1, 2, 3, 4, 5, 6, 7, 2];
const str2 = [3, 4, 5, 6, 7, 8, 9, 10];

console.log(uniqueElemArr(str1, str2));
