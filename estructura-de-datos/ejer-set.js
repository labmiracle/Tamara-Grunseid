//EJERCIOCIO 1

function isDuplicated(str) {
  const setExample = new Set(str);
  return str.length !== setExample.size;
}

console.log(isDuplicated([1, 2, 3, 4, 5, 6, 7]));
console.log(isDuplicated([1, 2, 3, 4, 4, 6, 7]));

//EJERCICIO 2
