const obj = {
  kek: "lul",
  flex: [{ a: 1 }, { a: 2 }],
  flex2: [{ a: 1 }, { a: 2 }],
  flex3: [{ a: 1 }, { a: 2 }],
  flex4: [{ a: 1 }, { a: 2 }],
};

// console.log(obj, typeof obj);

const objString = JSON.stringify(obj);

// console.log(objString, typeof objString);

const objString2 = '{"kek": "lul", "flex": false}';

console.log(objString2, typeof objString2);

const obj2 = JSON.parse(objString2);

console.log(obj2, typeof obj2);
