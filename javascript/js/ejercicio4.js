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
