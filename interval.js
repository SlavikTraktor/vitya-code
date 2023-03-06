let count = 4;

const interval1 = setInterval(() => {
    console.log(5);
    count--;
    if(count === 0) {
        clearInterval(interval1);
    }
}, 2000);