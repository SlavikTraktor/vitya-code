// spread objects

let obj1 = {
  color: "red",
  size: 228,
};

let obj3 = {
  flex: true,
};

let obj4 = { ...obj1 };

let obj2 = {
  strong: true,
  ...obj1,
  color: "yellow",
  color: "blue",
  ...obj3,
  name: "Name",
};
obj2.strong = false;

console.log(obj4 === obj1, obj2);

