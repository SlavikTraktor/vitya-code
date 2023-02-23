// SimpleFunction --------
function functionName() {
  let kek = 2;
  console.log(kek);
}

// functionName();

// Function Params --------

function functionWithParams(kek, kek2, kek3) {
  if (kek === 5) {
    console.log(kek2);
  } else if (kek > 5) {
    console.log(kek3);
  } else {
    console.log("хуй");
  }
}

let param = 4;
// functionWithParams(param, 8, 9);

// Return value from function --------

function functionWithReturnValue(a, b) {
  let aSqare = a * a;
  let bSqare = b * b;

  return aSqare - bSqare;
}

// let res = functionWithReturnValue(5, 4);
// console.log(res);

// console.log(functionWithReturnValue(5, 4));

// Return as end of a function --------

function functionWithReturnAsEnd(a) {
  if (a === 6) {
    console.log("NO");
    return;
  }

  console.log("YES");
}

functionWithReturnAsEnd(7);