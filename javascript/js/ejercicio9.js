
const arrayASumar = [];

function addOnlyNums (arrayIngreso) {
    arrayIngreso.forEach (item => {
        if (typeof(item) === 'number') {
            arrayASumar.push(item);
        };
    });
    
    var suma = 0;
    arrayASumar.forEach(item => {
        suma += item;
    });
    console.log(suma);
    return suma;
}

addOnlyNums(["true", "false"]);
