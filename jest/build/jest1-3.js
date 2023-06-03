function baseCanonica(cadenaADN) {
    if (typeof cadenaADN !== "string") {
      return "Error: debe ingresar un string";
    }
  
    if (cadenaADN === "") {
      return "";
    }
  
    let resultado = "";
  
    for (let i = 0; i < cadenaADN.length; i++) {
      const letra = cadenaADN[i];
  
      
      if (letra === 'C' || letra === 'T' || letra === 'A' || letra === 'G') {
        resultado += letra;
      }
    }
  
    return resultado;
  }
  
  module.exports = { baseCanonica };