const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

//FUNCION MAP
// 1. Obtener un arreglo de todos los nombres
const names = characters.map((character) => character.name);
console.log("FUNCION MAP 1.", names);

// 2. Obtener un arreglo de todas las alturas
const heights = characters.map((character) => character.height);
console.log("FUNCION MAP 2", heights);

// 3. Obtener un arreglo de objetos con las propiedades de nombre y altura
const nameHeightPairs = characters.map((character) => ({
  name: character.name,
  height: character.height,
}));
console.log("FUNCION MAP 3.", nameHeightPairs);

// 4. Obtener un arreglo de todos los nombres
console.log("FUNCION MAP 4.", names);

// FUNCION REDUCE

// 1. Obtener la masa total de los personajes
const totalMass = characters
  .map((character) => parseInt(character.mass))
  .reduce((acc, curr) => acc + curr, 0);
console.log("FUNCION REDUCE 1.", totalMass);

// 2. Obtener la altura total de todos los caracteres
const totalHeight = characters
  .map((character) => parseInt(character.height))
  .reduce((acc, curr) => acc + curr, 0);
console.log("FUNCION REDUCE 2.", totalHeight);

// 3. Obtener el número total de caracteres en todos los nombres de los personajes
const totalNameCharacters = characters
  .map((character) => character.name.length)
  .reduce((acc, curr) => acc + curr, 0);
console.log("FUNCION REDUCE 3.", totalNameCharacters);

// 4. Obtener el número total de caracteres por color de ojos
const eyeColorCharacterCount = characters.reduce((acc, curr) => {
  const eyeColor = curr.eye_color;
  const charactersCount = curr.name.length;

  if (acc[eyeColor]) {
    acc[eyeColor] += charactersCount;
  } else {
    acc[eyeColor] = charactersCount;
  }

  return acc;
}, {});
console.log("FUNCION REDUCE 4.", eyeColorCharacterCount);
