function indicePrimerLetraRepe(str) {
    if (typeof str !== 'string') {
        return ('debe ingresar una cadena');
      }

  str = str.toLowerCase().replace(/\s/g, "");

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      return i;
    }
  }

  return -1;
}

module.exports = { indicePrimerLetraRepe };
