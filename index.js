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
// let a = [10, 20, 21, 79];
// function callMe(accumulatedValue, currValue) {
//   // console.log(value + " is value at index " + index);
//   // return value;
//   //   let flag = value % 2 !== 0;
//   //   console.log(flag);
//   //   return flag;
//   let result  = accumulatedValue + currValue;
//   return result;
// }

// // let resForeach = a.forEach(callMe);
// // let resMap = a.map(callMe);
// // let resFilter = a.filter(callMe);
// let resReduce = a.reduce(callMe, 0);
// // console.log(resForeach);
// // console.log(resMap);
// // console.log(resFilter);
// console.log(resReduce);

// let str = "Rohit";
// let str1 = "rohit";
// let str2 = `rohit`;
// let str3 = new String("rohit");

// let user = { name: "Rohit" };

// console.log("My name is user.name");
// console.log(`My name is ${user.name}`);

// console.log(typeof str3);
// console.log(str3);

// let str = "rohit";
// str[0] = 'R';
// str = str.charAt(0).toUpperCase() + str.slice(1);
// // console.log(str.slice(-1));
// console.log(str);

// let sentance = "i am sentance and I am beautiful";

// let res = "";
// for (let i = 0; i < sentance.length; i++) {
//   let word = "";
//   let j = i;
//   while (j < sentance.length && sentance[j] !== " ") {
//     word += sentance[j];
//     j++;
//   }
//   word = word.charAt(0).toUpperCase() + word.slice(1);
// //   console.log(word);
//   res += word + " ";
//   i = j;
// }

// console.log(res);
// let sentance = "i am sentance and I am beautiful";
// let words = sentance.split(" ");
// // console.log(words);

// for (let i = 0; i < words.length; i++) {
//   let word = words[i];
//   word = word.charAt(0).toUpperCase() + word.slice(1);
//   words[i] = word;
// }
// sentance = words.join(" ");
// console.log(sentance);

// let obj = {};
// let obj = new Object();
// function Student(name, age, city) {
//   this.class = "10th";
//   this.name = name;
//   this.age = age;
//   this.city = city;
// }

// class Student {
//   constructor(name, age, city) {
//     this.class = "10th";
//     this.name = name;
//     this.age = age;
//     this.city = city;
//   }
// }

// let student1 = new Student("Rohit", 20, "Delhi");
// let student2 = new Student("Sachin", 21, "Mumbai");
// let student3 = new Student("Virat", 22, "Chennai");

// console.log(student1);
// console.log(student2);
// console.log(student3);

// let obj = {name: "Rohit", age: 20, city: "Delhi", password: "123456"};
// console.log(obj.name);
// console.log(obj["name"]);
// let obj = {};

// obj.name = "Rohit";
// obj["age"] = 20;
// console.log(obj);
// delete obj.age;
// console.log(obj);

// console.log(obj.password);
// console.log(Object.keys(obj));
// let obj = { name: "Rohit", age: 20, city: "Delhi" };

// console.log(Object.getOwnPropertyDescriptor(obj, "password"));
// // obj.password = "newpassword";
// delete obj.password;
// console.log(obj);
// console.log(Object.keys(obj));
// let obj = { name: "Rohit", age: 20, city: "Delhi" };

// Object.defineProperty(obj, "password", {
//   value: "123456",
//   writable: true,
//   enumerable: true,
//   configurable: false,
// });

// console.log(obj);
// obj.password = "newpassword";
// delete obj.password;
// console.log(obj);
//  console.log(Object.keys(obj));
// console.log(Object.getOwnPropertyDescriptor(obj, "password"));
// let obj = { name: "Rohit", age: 20, city: "Delhi", paassword: "123456" };

// Object.freeze(obj);
// Object.seal(obj);

// console.log(obj);
// obj.paassword = "newpassword";
// obj.hobby = "cricket";
// delete obj.paassword;
// console.log(obj);

// let animal = { hasTail: true };
// let dog = Object.create(animal);
// let cat = Object.create(animal);
// dog.IsBarks = true;
// console.log(dog);

// console.log(dog.hasTail);
// console.log(cat.hasTail);
// console.log(Object.getPrototypeOf(dog));

// let parent = { x: 10 };
// let child = Object.create(parent);
// child.x = 20;
// // console.log(Object.getPrototypeOf(child));
// console.log(child.x);
// // console.log(parent.x);

// let userData = {};

// userData.name = "Rohit";
// userData.age = 20;
// userData.city = "Delhi";
// userData.email = "test@example.com";

// console.log(userData.name);

// userData = JSON.stringify(userData);

// console.log(userData.name);

// userData = JSON.parse(userData);

// console.log(userData.name);

// let obj = {
//   name: "Rohit",
//   age: 20,
//   //   greet: function () {
//   //     console.log("Hello");
//   //   },
//   //   x: undefined,
// };

// Object.defineProperty(obj, "password", {
//   value: "123456",
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });

// obj.self = obj;

// console.log(obj);
// obj = JSON.stringify(obj);
// obj = JSON.parse(obj);
// console.log(obj);

// let el = document.getElementById("title");
// let els = document.getElementsByClassName("bold");

// els.forEach((el) => {
//   console.log(el);
// });

// let els = document.getElementsByTagName("h1");

// let el = document.querySelector("#title");
// let els = document.querySelectorAll(".bold");
// els.forEach((el) => {
//   console.log(el);
// });

// el.innerText = "Hello JS";
// el.innerHTML = "<h1>Hello Welcome to JS</h1>";
// el.textContent = "Hello JS";
// console.log(el);
// let el = document.querySelector("#title");
// console.log(el);

// el.setAttribute("class", "New_class");

// // console.log(el.getAttribute("class"));
// let elm = document.querySelector(".New_class");
// console.log(elm);
// elm.removeAttribute("class");

// let el = document.querySelector("#title");

// console.log(el);
// let el = document.querySelector("#title");
// el.style.fontSize = "125px";

// let el = document.createElement("li");
// el.textContent = "Hello JS";
// el.style.color = "red";

// let par = document.querySelector("#list");

// par.appendChild(el);
// console.log(el);
