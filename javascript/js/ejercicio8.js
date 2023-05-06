

function suma() {
    let arrayDefinido = [].slice.call(arguments);
    let total = 0;
    for (let i = 0; i < arrayDefinido.length; i++) {
        total += parseFloat(arrayDefinido[i]);
    }
    return total;
}

console.log(suma(1,2,3,4,5,10,52.3,1256,25,56));




