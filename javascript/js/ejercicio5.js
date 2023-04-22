
function camelize(cadena) {
    let cadenaVector = cadena.split(" ");
    vectorFinal = new Array (cadenaVector.length);
    for (let j = 0; j < cadenaVector.length; j++) {
        vectorFinal[j] = cadenaVector[j].charAt(0).toUpperCase()+cadenaVector[j].slice(1).toLowerCase()
    }
   return vectorFinal.join("");
}

