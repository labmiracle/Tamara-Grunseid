function greet(greeting:string = "Hi, how are you?"): string {
    return greeting.toUpperCase();
}
    
const defaultGreeting = greet();
const portugueseGreeting = greet('Oi como vai!');

console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);