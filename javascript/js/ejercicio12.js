alert('va a jugar al juego "adivinar el nro del 0 al 10"');
alert("Seleccione un nivel de dificultad. El nro de cada nivel, representa la cantidad de intentos que tiene para acertar");
let dificultad = prompt("Escriba el nivel de dificultad: 2, 3 o 5");
let numRan = Math.round(Math.random()*10);
var numIng = prompt("Ingrese un nro entre 0 y 10","Por ejemplo, 5");
let contador = 1;
do {
    if (numIng == numRan) {
        alert ("Acertaste!!");
        break;
    } else if (numIng > numRan) {
        alert ("El nro que ingresaste es mayor");
        contador ++;
        } else if (numIng < numRan) {
            alert ("El nro que ingresaste es menor");
            contador++;
        }
    if (contador > dificultad) {
        alert("perdiste");
        break;
    } else {
    var numIng = prompt("Ingrese un nro entre 0 y 10","Por ejemplo, 5");
    }   
} while (numIng !== numRan);
