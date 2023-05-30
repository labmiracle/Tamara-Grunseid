function myFunction(joyas: string, piedras: string): number {
    let arrJoyas: string[] = joyas.split("");
    let total: number = 0;
    arrJoyas.forEach(element => {
        let arrAcum: string[] = piedras.match(new RegExp(element, "g")) || [];
        total = arrAcum.length + total;
    });
    return total;
}

console.assert(myFunction("aA", "aAAbbbb") === 3);
console.assert(myFunction("z", "ZZ") === 0);
