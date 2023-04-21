function sum(arr,n) {
    if (arr.length == 0) {
        return 0;
    }
   return arr[n]+sum(arr.slice(n-1),n);
}

console.log(sum([1,2,3,4],2))
