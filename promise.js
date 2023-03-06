const applePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (fiftyFiftyRandom()) {
      resolve("apple");
      return;
    }
    reject("text of error");
  }, 500);
});

applePromise
  .then((res) => {
    console.log(res);
    return res + "+cherry";
  })
  .finally(() => {
    console.log('the end');
  })
  
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
    return new Promise((resolve, reject) => reject("azaza"));
  })
  .catch((error) => {
    console.log('error2', error);
  })
  .finally(() => {
    console.log('the end 2');
  });

console.log("kek");

function fiftyFiftyRandom() {
  return Math.random() > 0.5;
}
