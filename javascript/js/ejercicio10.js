function combineTwoArraysque (arr1,arr2) {
    const arr3 = [...arr1, ...arr2];
    console.log(arr3);
    return(arr3);
}

combineTwoArraysque([1,2,3,4],[true, false, 5,6,7,"hola que tal"]);