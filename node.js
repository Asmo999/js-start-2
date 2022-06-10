
console.log(arr)
function nums() {

}
arr1 = [4, 5, 11, 2, 9, 99, 1092, 1];
arr1.sort();

const newarr123 = arr1.filter((value) => {
    return value % 2 === 0;
});
console.log(newarr123)

const newarr1 = arr1.reduce((acc, n) => {
    return acc * n;
});
console.log(newarr1)
arr2 = [ 'HELLO', 'WORLD', 'JS', 'GEOLAB'];
count = 0;
for (i = 0; i < arr2.length; i++) {
    arr2[i] = arr2[i].toLowerCase();
    arr2[i] = arr2[i].charAt(0).toUpperCase() + arr2[i].substring(1).toLowerCase();

    // console.log(arr2[i]);
}
console.log(arr2)
// console.log(arr2)
// for (i = 0; arr2)
// console.log(count)