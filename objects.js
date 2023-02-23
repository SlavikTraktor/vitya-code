let obj = {
  value1: 5,
  value228: "Vitya",
  kek: true,
  lulArray: [1,5,8,9],
  kekObj: {
    hgfdhjfghmk: "sdjfdgfh"
  }
};

obj.value1 = 6;
obj.value1 = obj.value1 + 5;
let kek = obj.value1;

let human = {
    name: "Vlad",
    penis: 228,
    height: 25,
    isMan: true,
}


let humanArr = [
    {
        name: "Vlad",
        penis: 228,
        height: 25,
        isMan: true,
    },
    {
        name: "Dima",
        penis: 35,
        height: 35,
        isMan: true,
    },
    {
        name: "Kek",
        penis: 1,
        height: 2,
        isMan: false,
    }
]

humanArr[0].penis = 322;

console.log(humanArr);