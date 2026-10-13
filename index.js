// task1(); //it will take 3 sec

// task2(); // it will take 2 sec

// console.log("Hey I am JS");

// console.log(a);
// console.log("Hey");

// var a = 10;
// var b = 20;

// function sum(a, b) {
//   var res = a + b;
//   return res;
// }

// var result = sum(a, b);
// console.log(result);

// console.log("end");

// console.log(a);

// console.log(b);
// call(a);
// var a = 10;
// let b = 20;
// // console.log(a);

// function call(a) {
//   console.log(a);
//   console.log(a);
//   console.log(a);
// }

// call(a);

// function counterFactory() {
//   let count = 0;
//   return function x() {
//     count = 5;
//     console.log(count);
//   };
// }

// let counter = counterFactory();
// // console.log(counter);

// counter();
// counter();

// let a = 10;
// let a = "string";
// let a = {};
// let a = false;
// let a = null;
// let a = undefined;
// console.log(typeof a);

// let a = 10;

// let b = a;
// b = 20;

// let a = { x: 10 };

// let b = a;

// b.x = 20;

// console.log(a.x);
// console.log(b.x);

// let a = [];

// console.log(Array.isArray(a));
// if(Array.isArray(a)){}else {}

// function Array(){
//     this.a = 10;
// }

// let a = new Array(10);

// console.log(a);

// let a = [10, 20, "sachin", true];

// console.log(a[2]);
// console.log(a.at(-3));

// let a = [10, 20, "sachin", true];

// console.log(a.length);
// console.log(a);
// a.push(100);
// a.unshift(100);
// a.splice(2, 2, "Rohit", false);
// let b = a.slice(1);
// a.pop();
// a.shift();
// console.log(a);
// console.log(b);
// let a = [10, 20, "sachin", true];

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i] + " is value at index " + i);
// }
// let i = 0;
// while (i < a.length) {
//   console.log(a[i] + " is value at index " + i);
//   i++;
// }

// do {
//   console.log(a[i] + " is value at index " + i);
//   i++;
// } while (i < a.length);
let a = [10, 20, "sachin", true];
function callMe(value, index) {
//   console.log(value + " is value at index " + index);
return value;   
}

let resForeach = a.forEach(callMe);
let resMap = a.map(callMe);
// a.filter(callMe);
// a.reduce(callMe);
console.log(resForeach);
console.log(resMap);
