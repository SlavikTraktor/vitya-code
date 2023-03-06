let kek = 8;

const timeout1 = setTimeout(() => {
    console.log(kek);
}, 3000);

setTimeout(() => {
    console.log(234567);
}, 0);

console.log(322);
// clearTimeout(timeout1);

for(let i = 0; i < 10000000000; i++) {
    let kek = i + 1;
}

setTimeout(() => {
    console.log(228);

    kek = -kek;
}, 1500);
