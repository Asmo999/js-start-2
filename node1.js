arr = [];
arr1 = [];
arr2 = [];
for(i = 1;i < 20;i++){
    if(arr[20]!== Number) {
        arr.push(i);
    };
};

for(x = 0; x < arr.length;x++) {
    if (typeof(arr[x]) === "number") {
        arr1.push(arr[x]);
        if (arr[x] % 2 === 0){
            arr2.push(arr[x] / 2);
        }
        else {
            arr2.push(arr[x] ** 2)
        };
    };
};
const newarr1 = arr2.reduce((acc, n) => {
    return acc + n;
});
console.log(arr1);
console.log(arr2);
console.log(Math.round(newarr1 / 2));