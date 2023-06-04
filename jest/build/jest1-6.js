function maxUnosCon(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Debe ingresar un arreglo de ceros y unos";
  }

  for (let i = 0; i < arr.length; i++) {
    const valor = typeof arr[i] === "string" ? parseInt(arr[i]) : arr[i];
    if (valor !== 0 && valor !== 1) {
      return -1;
    }
  }

  let maxUnos = 0;
  let unosActuales = 0;

  for (let i = 0; i < arr.length; i++) {
    const valor = typeof arr[i] === "string" ? parseInt(arr[i]) : arr[i];
    if (valor === 1) {
      unosActuales++;
      maxUnos = Math.max(maxUnos, unosActuales);
    } else {
      unosActuales = 0;
    }
  }
  return maxUnos;
}

module.exports = { maxUnosCon };
