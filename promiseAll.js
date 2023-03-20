const promise1 = Promise.resolve(5);
const promise2 = Promise.resolve(12);
const promise3 = Promise.resolve(228);

const all = Promise.all([promise1, promise2, promise3]).then((array) => {
  return array.reduce((acc, v) => acc + " " + v);
});

all.then((someRes) => {
  console.log(someRes);
});
