let capitalize: (val1: number, val2: number) => number;
let multiply: (val: string) => string;

multiply = function (value: string): string {
return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

capitalize = function (x: number, y: number): number {
return x * y;
}

console.log('[Ejercicio 3.6]', multiply(`habil ${capitalize(5, 10)}`));