// some, filter, map, reduce, every, find, findIndex, forEach

let arr = [4, 7, 9, 15, 1, 1];

let myMap = (arr, cb) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let newEl = cb(arr[i]);
        newArr.push(newEl);
    }

    return newArr;
}


let res = arr.map((arrItem) => arrItem + 2);
let res2 = myMap(arr, (arrItem) => arrItem + 2);

console.log(arr);
console.log(res);
console.log(res2);