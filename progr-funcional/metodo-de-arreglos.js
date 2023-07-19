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

//FUNCION FILTER
// 1. Obtener personajes con masa superior a 100
const massGreaterThan100 = characters.filter(
  (character) => parseInt(character.mass) > 100
);
console.log("FUNCION FILTER 1.", massGreaterThan100);

// 2. Obtener personajes con una altura inferior a 200
const heightLessThan200 = characters.filter(
  (character) => parseInt(character.height) < 200
);
console.log("FUNCION FILTER 2.", heightLessThan200);

// 3. Obtener todos los personajes masculinos
const maleCharacters = characters.filter(
  (character) => character.gender === "male"
);
console.log("FUNCION FILTER 3.", maleCharacters);

// 4. Obtener todos los personajes femeninos
const femaleCharacters = characters.filter(
  (character) => character.gender === "female"
);
console.log(femaleCharacters);

//FUNCION SORT
// 1. Ordenar por nombre
const sortedByName = characters.sort((a, b) => a.name.localeCompare(b.name));
console.log("FUNCION SORT 1.", sortedByName);

// 2. Ordenar por masa
const sortedByMass = characters.sort(
  (a, b) => parseInt(a.mass) - parseInt(b.mass)
);
console.log("FUNCION SORT 2.", sortedByMass);

// 3. Ordenar por altura
const sortedByHeight = characters.sort(
  (a, b) => parseInt(a.height) - parseInt(b.height)
);
console.log("FUNCION SORT 3.", sortedByHeight);

// 4. Ordenar por género
const sortedByGender = characters.sort((a, b) =>
  a.gender.localeCompare(b.gender)
);
console.log("FUNCION SORT 4.", sortedByGender);

//FUNCION EVERY
// 1. ¿Todos los personajes tienen ojos azules?
const allCharactersHaveBlueEyes = characters.every(
  (character) => character.eye_color === "blue"
);
console.log("FUNCION EVERY 1.", allCharactersHaveBlueEyes);

// 2. ¿Todos los personajes tienen una masa superior a 40?
const allCharactersHaveMassGreaterThan40 = characters.every(
  (character) => parseInt(character.mass) > 40
);
console.log("FUNCION EVERY 2.", allCharactersHaveMassGreaterThan40);

// 3. ¿Todos los caracteres son más bajos que 200?
const allCharactersAreShorterThan200 = characters.every(
  (character) => parseInt(character.height) < 200
);
console.log("FUNCION EVERY 3.", allCharactersAreShorterThan200);

// 4. ¿Todos los personajes son hombres?
const allCharactersAreMale = characters.every(
  (character) => character.gender === "male"
);
console.log("FUNCION EVERY 4.", allCharactersAreMale);

//FUNCION SOME
// 1. ¿Hay al menos un personaje masculino?
const atLeastOneMaleCharacter = characters.some(
  (character) => character.gender === "male"
);
console.log("FUNCION SOME 1.", atLeastOneMaleCharacter);

// 2. ¿Hay al menos un personaje con ojos azules?
const atLeastOneCharacterWithBlueEyes = characters.some(
  (character) => character.eye_color === "blue"
);
console.log("FUNCION SOME 2.", atLeastOneCharacterWithBlueEyes);

// 3. ¿Hay al menos un personaje más alto que 200?
const atLeastOneCharacterTallerThan200 = characters.some(
  (character) => parseInt(character.height) > 200
);
console.log("FUNCION SOME 3.", atLeastOneCharacterTallerThan200);

// 4. ¿Hay al menos un personaje que tenga una masa inferior a 50?
const atLeastOneCharacterWithMassLessThan50 = characters.some(
  (character) => parseInt(character.mass) < 50
);
console.log("FUNCION SOME 4.", atLeastOneCharacterWithMassLessThan50);
