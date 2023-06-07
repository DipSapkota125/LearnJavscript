// const length = prompt("Enter length");
// const width = prompt("Enter width");
// const area = length * width;

// console.log(area);
// alert("The area of rectangle is :" + area);
// document.write("The area of rectangle is :" + area);

// variables

// var x = 90;
// console.log(x);

// x = 100;
// console.log(x);

// var x = 8 + 7;
// console.log(x);

// let y = 70;
// console.log(y);
// y = 56;
// console.log(y);

// let y = 3 + 3;
// console.log(y);

// const z = 78;

// console.log(z);

// z = 90;
// console.log(z);

// const z = 89 + 56;
// console.log(z);

// const name = "Amrit Gurung";
// const y = 89;
// const ans = name + y;
// console.log(ans);

// let y = true;
// console.log(typeof y);
// let x = 89;
// let y = 34;
// let z = true;

// let ans = x + y + z;
// console.log(ans);

// let y = null;
// console.log(y);
// console.log(typeof y);

// let z;
// console.log(z);
// console.log(typeof z);

// const name = "Harka";
// const lname = "Rai";

// console.log(`Haina k ho yesto : ${name} ${lname}`);

//type conversion

// const x = 90;
// console.log(x);
// console.log(typeof x);
// console.log(typeof String(x));

// const x = "Hello world";
// console.log(x);
// console.log(typeof x);
// console.log(typeof Number(x));

//Strings Method

// let result = "Hello World!";

// console.log(result[0]);
//length
// console.log(result.length);

//concat
// console.log(result.concat("Harka rai"));
//replace

// console.log(result.replace("Hello", "How"));

//split
// console.log(result.split(" "));

//charAt
// console.log(result.charAt(6));

//indexof
// console.log(result.indexOf("H"));

//includes
// console.log(result.includes("World"));

//trim
// console.log(result.trim());

//substring
// console.log(result.substring(0, 4));
// console.log(result.slice(0, 4));

// console.log(result.toLowerCase());
// console.log(result.toUpperCase());

//if else
// let email = "dipsapkota325@gmail.com";
// let password = "9999999999";

// if (email === "dipsapkota325@gmail.com" && password === "999999999") {
//   console.log("Welcome to our page!");
// } else {
//   console.log("Invalid credentials!");
// }

// let day = "cloudy";
// if (day === "rainy") {
//   console.log("It's a rainy day!");
// } else if (day === "sunny") {
//   console.log("It's a beautiful day!");
// } else if (day === "cloudy") {
//   console.log("K aja pani parla ta!");
// } else if (day === "winter") {
//   console.log("tyo samaya pani audaexa!");
// } else {
//   console.log("Invalid day!!");
// }

// let x = 10;
// if (x > 15) {
//   console.log("X is greater than 15!");
// } else if (x > 5) {
//   console.log("X is greater than 5, but not greater than 15");
// } else {
//   console.log("X is not greater than 15!");
// }

// let day = new Date().getDay();
// switch (day) {
//   case 0:
//     console.log("Today is a sunday!");
//     break;
//   case 1:
//     console.log("Today is a monday!");
//     break;
//   case 2:
//     console.log("Today is a Tuesday!");
//     break;

//   case 3:
//     console.log("Today is a wednesday!");
//     break;
//   case 4:
//     console.log("Today is a thursday!");
//     break;
//   case 5:
//     console.log("Today is a friday!");
//     break;
//   case 6:
//     console.log("Today is a saturday!");
//     break;

//   default:
//     console.log("Invalid day!");
//     break;
// }

// let month = "June";

// switch (month) {
//   case "January":
//   case "February":
//   case "March":
//     console.log("The month is in Q1");
//     break;

//   case "April":
//   case "May":
//   case "June":
//     console.log("The month is in Q2");
//     break;

//   case "July":
//   case "August":
//   case "September":
//     console.log("The month is in Q3");
//     break;

//   case "October":
//   case "November":
//   case "December":
//     console.log("The month is in Q4");
//     break;

//   default:
//     console.log("Invalid month!");
//     break;
// }

// for (let i = 0; i < 10; i++) {
//   console.log(Math.random());
// }

// for (let i = 0; i <= 10; i++) {
//   console.log("Iteration:", i);
// }

// let inputValue = prompt("Enter your number!");
// let number = Number(inputValue);

// if (isNaN(number)) {
//   alert("Enter valid number");
// } else {
//   document.write("Even Number are:");

//   for (let i = 0; i <= 10; i++) {
//     if (i % 2 === 0) {
//       document.write("<br>", i);
//     }
//   }
// }

//while loop
// let i = 0;
// while (i <= 10) {
//   console.log("Iteration:", i);
//   i++;
// }

// let i = 10;
// do {
//   console.log("Hello world!");
//   i++;
// } while (i < 10);

// const arr = [4, 5, 7, 9, 2, "Shyam", "Ram", 3];

// console.log(arr[1]);

// const arr = [];

// arr[0] = 90;
// arr[1] = 100;

// console.log(arr);

// const arr = [8, 7, 2, 3, 6, 4, 5, 6];

// console.log(arr.length);
//push
// arr.push(90);
// arr.pop();

// arr.unshift(55);
// arr.shift();
// const ans = arr.includes(3);
// console.log(arr);
// const ans = arr.splice(2, 5);
// console.log(arr);

// arr.sort((a,b)=>a-b)
// console.log(ans);

// const Obj = {
//   name: "Tiba",
//   age: 20,
//   country: "India",
// };

// console.log(Obj.);

// alert("Hello world");
// console.log("Task1");
// console.log("Task2");
// console.log("Task3");

// function sum(a, b, callBack) {
//   const result = a + b;
//   callBack(result);
// }

// function added(result) {
//   const h1 = document.querySelector("h1");
//   h1.innerText = result;
// }

// sum(4, 8, added);

// let arr = [8, 9, 3, 4, 6, 5, 1];

// function calculations(arr = [], callBack) {
//   let ans = [];

//   for (let i = 0; i < arr.length; i++) {
//     const element = callBack(arr[i]);
//     ans.push(element);
//   }
//   console.log(ans);
// }

// calculations(arr, (a) => a * 10);
// calculations(arr, (a) => a / 10);

// const a = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) resolve("Promise fulfilled!");
//   else reject("Technical error");
// });

// a.then((parameter) => console.log(parameter)).catch((error) =>
//   console.log(error)
// );

// console.log("Hello world!");

// setTimeout(() => {
//   console.log("harka rai");
// }, 2000);

// function FetchedData() {
//   fetch("https://catfact.ninja/fact")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// }

// FetchedData();

// console.log("Haina k ho yesto yo");

// const arr = new Array(1, 2, 3, 4, 5);
// console.log(arr);

// function addArr(arr = []) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }
// console.log(addArr([8, 4, 5, 6, 2]));

// let c = 90;

// const arr = new Array(1, 3, 4, 5);
// console.log(arr);

// const arr = [];

// for (let i = 0; i < 10; i++) {
//   arr.push(i);
// }

// console.log(arr);

//objects
// let Car = {
//   name: "Toyota",
//   model: "Camry",
//   color: "red",
//   runWheel: 4,
//   isElectric: false,

//   startEngine: function () {
//     console.log("Start engine!");
//     return true;
//   },

//   closeEngine: function () {
//     console.log("Close engine!");
//     return false;
//   },
// };

// console.log(Car);

// if (Car.startEngine()) {
//   console.log("Your car is ready to start!");
// } else if (Car.closeEngine()) {
//   console.log("Your car is not ready to start!");
// } else {
//   console.log("invalid!");
// }

//function

// function myFunc(a, b, c = 90) {
//   console.log(c);
//   return a + b + c;
// }

// const result = myFunc(4, 5);
// console.log(result);

// let arr = [4, 7, 5, 9, 3, 5, 6];
// function SumArr(arr = []) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }
// const ans = SumArr(arr);
// console.log(ans);

//Scoping
// let x = 90;

// {
//   let y = 9 + 9;
//   console.log(y);

//   console.log(x);
// }

//var scope

// var x = 90;

// function myVar() {
//   if (true) {
//     var x = 9 + 9;
//   }
//   console.log(x);
// }

// console.log(x);
// myVar();

//for let

// function myLet() {
//   if (true) {
//     let x = 8 * 8;
//     console.log(x);
//   }
// }

// myLet();

//DOM
// const header = document.getElementById("myHeader");
// const subHeader = document.getElementsByClassName("myClass");

// subHeader[0].innerHTML = "Bina dhewuake free visa mili";
// subHeader[0].style.backgroundColor = "blue";
// subHeader[0].style.color = "white";

// header.innerHTML = "Haina k ho yesto!";
// header.style.backgroundColor = "red";
// header.style.color = "white";

// const text = document.getElementById("hello");
// const text1 = document.getElementsByClassName("myClass");
// const tag = document.getElementsByTagName("span");
// const Btn = document.querySelectorAll("button");
// const ClickBtn = document.querySelector("#click");

// function showWhenClick() {
//   const h1 = document.createElement("h1");
//   h1.innerHTML = "Nepal has adopted non-allignace foreign-policy!";
//   document.body.prepend(h1);
// }

// function deleteOnce() {
//   const h1 = document.querySelector("h1");
//   h1.remove();
// }

// ClickBtn.onclick = showWhenClick;
// Btn[1].onclick = deleteOnce;
// console.log(ClickBtn.getAttribute("id"));
// ClickBtn.setAttribute("class", "myClass");

// text.innerHTML = "<h1>Hello sir</h1>";
// text.style.backgroundColor = "red";
// text.style.color = "white";

// text1[0].innerHTML = "<h3>Adipurush</h3>";
// text1[0].style.backgroundColor = "blue";
// text1[0].style.color = "white";

// tag[1].innerText = "Haina k ho yesto";

// ClickBtn.style.backgroundColor = "green";
// ClickBtn.style.color = "white";
// ClickBtn.style.cursor = "pointer";
// ClickBtn.style.padding = "10px";
// ClickBtn.style.border = "none";

// Btn[1].style.backgroundColor = "red";
// Btn[1].style.color = "white";
// Btn[1].style.cursor = "pointer";
// Btn[1].style.padding = "10px";
// Btn[1].style.border = "none";
// Btn[1].style.margin = "4px";

//advance array ,method

// const arr = [4, 5, 6, 7, 8, 3, 8, 9, 1];

// const newArray = arr.find((value, index) => value > 8);
// const newArray = arr.filter((value, index) => value > 5);
// console.log(newArray);

// arr.find((value, index) => {
//   if (value === 6) {
//     console.log("6 exists!");
//   }
// });

//some
// const newArr = arr.some((value, index) => value > 6);
// console.log(newArr);

//every
// const newArr = arr.every((value, index) => value > 6);
// console.log(newArr);

// const newArr = arr.sort((a, b) => a - b);
// console.log(newArr);

// const myArr = [
//   [1, 2, 3, 4],
//   [5, 6, 7],
//   [8, 9, 10],
// ];
// const flatArr = myArr.flat();
// console.log(flatArr);

//forEach
// const newArr = arr.map((value, index) => {
//   return (value += 7);
// });

// console.log(newArr);
// console.log(arr)

//DOM MANIPULATION

// const text = document.getElementById("hello");
// const text1 = document.getElementsByClassName("myClass");
// const mayor = document.getElementsByTagName("span");
// const Btn = document.querySelectorAll("button");
// const ClickBtn = document.querySelector("#click");

// console.log(ClickBtn.getAttribute("id"));
// ClickBtn.setAttribute("class", "meroClass");

// function ShowWhenClick() {
//   const h1 = document.createElement("h1");
//   h1.innerHTML = "Nepal has adopted non-alliagnance foreign policy";
//   document.body.prepend(h1);
// }

// function deleteOnes() {
//   const h1 = document.querySelector("h1");
//   h1.remove();
// }

// ClickBtn.onclick = ShowWhenClick;
// Btn[1].onclick = deleteOnes;

// ClickBtn.style.backgroundColor = "green";
// ClickBtn.style.color = "white";
// ClickBtn.style.border = "none";
// ClickBtn.style.cursor = "pointer";
// ClickBtn.style.padding = "10px";
// ClickBtn.style.margin = "5px";

// Btn[1].style.backgroundColor = "red";
// Btn[1].style.color = "white";
// Btn[1].style.border = "none";
// Btn[1].style.cursor = "pointer";
// Btn[1].style.padding = "10px";
// Btn[1].style.margin = "5px";

// mayor[0].innerHTML = "Harka Rai";
// mayor[1].innerHTML = "Balen Shah";

// text1[0].innerHTML = "<h2>I am good What about you!</h2>";
// text1[0].style.backgroundColor = "blue";
// text1[0].style.color = "white";

// text.innerHTML = "<h1>How is your Life</h1>";
// text.style.backgroundColor = "red";
// text.style.color = "white";

//Advance array method

// const arr = [3, 5, 6, 2, 1, 8, 9, 7];

//find
// const newArr = arr.find((value, index) => value > 5);
// console.log(newArr);

//filter
// const newArr = arr.filter((value, index) => value > 5);
// console.log(newArr);

//sort
// const newArr = arr.sort((a, b) => a - b);
// console.log(newArr);

// const SubArr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];
// const newArr = SubArr.flat();
// console.log(newArr);

//some
// const result = arr.some((value, index) => value > 6);
// console.log(result);

//every
// const result = arr.every((value, index) => value > 6);
// console.log(result);

//forEach
// const result = arr.forEach((value, index) => (value += 5));
// console.log(result);
// console.log(arr);

//map
// const result = arr.map((value, index) => (value += 5));
// console.log(result);
// console.log(arr);

//reduce
// const result = arr.reduce(
//   (prevValue, currentValue) => prevValue + currentValue
// );
// console.log(result);

//USA DATA APIS

//Add events listeners
// const header = document.getElementById("header");
// const Box = document.getElementById("box");
// const Btn = document.getElementById("click");
// const Input = document.querySelector("input");

// Btn.classList.add("classForDiv");

// Btn.addEventListener("click", () => {
//   Box.classList.add("classForBox");
// });

// Box.addEventListener("mouseover", () => {
//   header.innerHTML = "Prachandale india bata bhaisi lerayae";
//   Btn.style.transform = "scale(1.2)";
//   header.style.backgroundColor = "orange";
//   Btn.style.filter = "";
// });

// Box.addEventListener("mouseout", () => {
//   Btn.style.transform = "";
//   header.style.backgroundColor = "";
// });

// Box.addEventListener("dblclick", () => {
//   document.body.style.backgroundColor = "black";
// });

// Box.addEventListener("click", () => {
//   document.body.style.backgroundColor = "#fff";
// });

// Btn.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
//   Btn.style.backgroundColor = "purple";
// });

// addEventListener("contextmenu", (e) => {
//   e.preventDefault();
//   Btn.style.filter = "blur(10px)";
// });

// Input.addEventListener("change", (e) => {
//   console.log(e.target.value);
// });

//Math Objects

// const result = Math.round(4.5);
// console.log(result);

// const result = Math.floor(4.5);
// console.log(result);

// const result = Math.ceil(4.5);
// console.log(result);

// const result = Math.trunc(4.5);
// console.log(result);

// const result = Math.random();
// console.log(result);

// const result = Math.abs(-3);
// console.log(result);

// function myFunc(a, b) {
//   return Math.abs(a - b);
// }

// const result = myFunc(2, 8);
// console.log(result);

// const result = Math.max(4, 5, 45);
// console.log(result);

// const result = Math.min(4, 5, 45);
// console.log(result);

// const result = Math.pow(2, 4);
// console.log(result);

// const result = Math.sqrt(625);
// console.log(result);

// const result = Math.tan((45 * Math.PI) / 180);
// console.log(result);

// const result = Math.log2(8);
// console.log(result);

// const result = Math.log10(100);
// console.log(result);

//Date
// const result = new Date();
// console.log(result.toISOString());
// console.log(result.getFullYear());

//Add event listener

// const header = document.querySelector("#header");
// const Box = document.querySelector("#box");
// const Btn = document.querySelector("#listen");
// const Input = document.querySelector("input");

// Input.addEventListener("change", (event) => {
//   console.log(event.target.value);
// });

// Btn.classList.add("classForDiv");

// Btn.addEventListener("click", () => {
//   header.innerHTML = "Prachandale india bata bhaisi lerayae";
//   Box.classList.add("classForBox");
// });

// Btn.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
//   Btn.style.backgroundColor = "purple";
// });

// Box.addEventListener("mouseover", () => {
//   header.style.backgroundColor = "Orange";
//   header.style.color = "white";
//   Btn.style.transform = "scale(1.2)";
// });

// Box.addEventListener("mouseout", () => {
//   header.style.backgroundColor = "";
//   header.style.color = "";
//   Btn.style.transform = "";
// });

// Box.addEventListener("dblclick", () => {
//   document.body.style.backgroundColor = "black";
// });

// Box.addEventListener("click", () => {
//   document.body.style.backgroundColor = "#fff";
// });

// window.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
//   Btn.style.filter = "blur(10px)";
// });

//Math Object

// const result = Math.round(4.5);
// document.write(result);
// console.log(result);

// const result = Math.floor(4.5);
// document.write(result);
// console.log(result);

// const result = Math.ceil(4.1);
// document.write(result);
// console.log(result);

// const result = Math.trunc(6.5);
// document.write(result);
// console.log(result);

// const result = Math.pow(2, 4);
// document.write(result);
// console.log(result);

// const result = Math.sqrt(625);
// document.write(result);
// console.log(result);

// const result = Math.random();
// document.write(result);
// console.log(result);

// const result = Math.tan((45 * Math.PI) / 180);
// document.write(result);
// console.log(result);

// const result = Math.log2(8);
// document.write(result);
// console.log(result);

// const result = Math.log10(100);
// document.write(result);
// console.log(result);

// const result = new Date();
// console.log(result.getFullYear());
// document.write(result.getFullYear());

// const Obj = {
//   name: "Ram",
//   printName: function () {
//     console.log(this.name);
//   },
// };
// Obj.printName();

//LocalStorage && sessionStorage

// const Input = document.querySelector("input");
// const BtnClick = document.querySelector("#click");
// const BtnLogout = document.querySelector("#clear");

// BtnClick.style.backgroundColor = "green";
// BtnClick.style.color = "white";
// BtnClick.style.border = "none";
// BtnClick.style.width = "100px";
// BtnClick.style.height = "50px";
// BtnClick.style.cursor = "pointer";

// BtnLogout.style.backgroundColor = "red";
// BtnLogout.style.color = "white";
// BtnLogout.style.border = "none";
// BtnLogout.style.width = "100px";
// BtnLogout.style.height = "50px";
// BtnLogout.style.cursor = "pointer";

// const addData = (e) => {
//   localStorage.setItem(
//     "key",
//     JSON.stringify({ name: "Ram", age: 23, gender: "male", isMarried: false })
//   );
// };

// BtnClick.addEventListener("click", addData);

// BtnLogout.addEventListener("click", () => {
//   localStorage.clear();
// });

// if (localStorage.getItem("key")) {
//   console.log(JSON.parse(localStorage.getItem("key")));
// }

// const Btn = document.querySelector("#clear");
// const myFunc = () => {
//   console.log("HEllo world");
// };
// const ClearOut = setInterval(myFunc, 2000);

// Btn.addEventListener("click", () => {
//   clearInterval(ClearOut);
// });

//setTimeout and setIbterval

// const BtnClear = document.querySelector("#clear");
// const intervalId = setInterval(() => {
//   console.log("Hello world!");
// }, 3000);

// BtnClear.addEventListener("click", () => {
//   clearInterval(intervalId);
// });

const intervalId = setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleTimeString());
  document.write(now.toLocaleTimeString());
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
