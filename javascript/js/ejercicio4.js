function palabraMasLarga(str) {
    var arrayConvertido = str.split(" ");
    var compara = arrayConvertido[0];
     for (let i = 1; i < arrayConvertido.length; i++) {
        if (arrayConvertido[i].length > compara.length) {
            compara = arrayConvertido[i];
        }
    }
    return compara; 
 }

 function primeraMayuscula (cadena) {
    let cadenaVector = cadena.split(" ");
    vectorFinal = new Array (cadenaVector.length);
    for (let j = 0; j < cadenaVector.length; j++) {
        vectorFinal[j] = cadenaVector[j].charAt(0).toUpperCase()+cadenaVector[j].slice(1).toLowerCase()
    }
   return vectorFinal.join(" ");
 }
 