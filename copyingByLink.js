// Comparing objects

let obj1 = {
  color: "black",
  size: 5,
}; // a1

let obj2 = {
  color: "black",
  size: 5,
}; // c2

// console.log(obj1 === obj2);

// Comparing arrays

let arr1 = [1, 2, 3]; // c1
let arr2 = [1, 2, 3]; // b3
let arr3 = arr2; // b3

console.log(arr2, arr3);

arr3.push(4);

console.log(arr2, arr3);
