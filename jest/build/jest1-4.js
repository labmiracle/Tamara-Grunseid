function sumarArrPos(arr) {
    if (!Array.isArray(arr)) {
      return "Error: debe ingresar un array";
    }
  
    let suma = 0;
  
    for (let i = 0; i < arr.length; i++) {
      const num = Number(arr[i]);
  
      if (!isNaN(num) && num > 0) {
        suma += num;
      }
    }
  
    return suma;
  }

  console.log(sumarArrPos(NaN))
  
  module.exports = { sumarArrPos };