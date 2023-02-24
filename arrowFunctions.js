// Overview

let func = (a, b = false) => {
  if (b) {
    console.log(a);
  } else {
    console.log("NOPE");
  }
};

// Function inside another function

let kek = (num) => {
  console.log(num);
};

let kek2 = (cb) => {
  let newFunc = () => {
    cb(6);
  };

  return newFunc;
};

// kek2(kek)();

// One line return

let funcReturn = (val) => {
  return val * 9 - 8;
};

let funcReturn2 = (val) => val * 9 - 8;

console.log(funcReturn(5));
console.log(funcReturn2(5));
