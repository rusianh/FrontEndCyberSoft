// console.log(sum(5,3));
//!import, export
//*Node.js
// var callSum = require('./sum.js');
// console.log("con hai so:", callSum(4,5));

//*ES6
//cách 1
// Tên callSum có thể tự do đặt
// import callSum from "./sum.js";
// console.log("con hai so:", callSum(3,4));

//cách 2
// Tên hàm sum phải đặt y chang
// import {sum} from "./sum.js";
// console.log(sum(3,4));

// import {sum as callSum} from "./sum.js";
// console.log(callSum(3,4));

//Import nhiều hàm
// import {sum, sum2} from "./sum.js";
// console.log("Cong Hai So: ",sum(3,4));
// console.log("Cong Ba So: ",sum2(3,4,3));

// Import tất cả 
import * as sumFunctions from "./sum.js";
console.log("Cong Hai So: ",sumFunctions.sum(3,4));
console.log("Cong Ba So: ",sumFunctions.sum2(3,4,3));



