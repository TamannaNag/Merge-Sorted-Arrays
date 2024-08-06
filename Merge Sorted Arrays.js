
//Merge Sorted Arrays

const input = require("readline-sync");

let n = input.questionInt("enter the length of the first array:");
let m = input.questionInt("enter the length of the second array:");

let a = [];
let b = [];
let d = [];

for (let i = 0; i < n; i++) {
  a[i] = input.questionInt(" the  num for 1 array:");
}

for (let j = 0; j < m; j++) {
  b[j] = input.questionInt("the num for 2 array:");
}

let i = 0;
let j = 0;
let k = 0;

while (k < n + m) {
  if (i < n) {
    if (j < m) {
      if (a[i] < b[j]) {
        d[k] = a[i];
        i++;
      } else {
        d[k] = b[j];
        j++;
      }
    } else {
      d[k] = a[i];
      i++;
    }
  } else {
    d[k] = b[j];
    j++;
  }
  k++;
}     
for(let r = 0 ; r<d[j+1]; r++){

    d[j] === d[j+1]
}
    console.log(d);


