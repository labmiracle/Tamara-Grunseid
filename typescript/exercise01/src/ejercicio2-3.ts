const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];

// function flatten (array: any) {
// const flattened = [];

// for (const element of array) {
//     if (Array.isArray(element)) {
//         element;
//         flattened.push(...element);
//     } else {
//         element;
//         flattened.push(element);
//     }
// }

function flatten<T>(items: T[]): T[] {
    return new Array<T>().concat(items);

}

//return flattened;
//}

const flattenedNumbers = flatten(numbers);

console.log('[Ejercicio 4.3]', flattenedNumbers)