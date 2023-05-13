function onlyUniques(arr) {
    let arrFinal = [];
    arr.forEach((item,index) => {
        let arrResult = [];
        for (let i = 0; i < arr.length; i++) {            
            if (item !== arr[i]) {
                arrResult.push(item);
             }
             let arrLongMenos = arr.length - 1;
             if (arrResult.length === arrLongMenos) {
                 arrFinal.push(item);
             }
        }        
    });
    let finalResult = arrFinal.slice(0,arrFinal.length-1);
    return finalResult
};
  

console.log(onlyUniques([-1,1,2,2,3,1,2,3,3,4,5,'hola']));


