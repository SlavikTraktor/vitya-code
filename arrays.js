let a = [5, 8, 9, 4, 56];
//       0  1  2  3  4

a[0] = a[0] + 5;

a[2] = a[1] + a[0] * 8 - 1;

console.log(a[0] + 5, a[2]);


a.push(4);


console.log(a);
console.log(a.length);