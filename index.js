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

let result = "Hello World!";

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

const Obj = {
  name: "Tiba",
  age: 20,
  country: "India",
};

console.log(Obj);
