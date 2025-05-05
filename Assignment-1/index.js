// Part 1
import { createInterface } from "readline/promises";
//=====================================================================================
// 1.  Convert the string "123" to a number and add 7. (0.5 Grade)
//=====================================================================================
// • Output Example: 130
// let str = "123";
// let result = 7 + Number(str);
// console.log(result);
//=====================================================================================
// 2.  Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
// • Input Example: 0
// •  Output Example: "Invalid"
// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// async function getValue() {
//   const userInput = await rl.question("enter a value: ");
//   if (userInput == false) {
//     console.log("Invalid");
//   } else {
//     console.log("Valid");
//   }
//   rl.close();
// }
// getValue();
//=====================================================================================
// 3.  Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
// • Output Example:1, 3, 5, 7, 9
//=====================================================================================
// let result = [];
// for (let i = 1; i <= 10; i += 2) {
//   result.push(i);
// }
// console.log(result);
//=====================================================================================
// 4.  Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
// • Input Example: [1, 2, 3, 4, 5]
// • Output Example: [2,4]
//=====================================================================================
// async function getArrayInputs() {
//   const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   let arr = [];
//   const arrSize = await rl.question("enter array size: ");
//   let arrSizeAsNumber = Number(arrSize);
//   for (let i = 0; i < arrSizeAsNumber; i++) {
//     const element = await rl.question(`enter arr[${i}]:`);
//     arr.push(Number(element));
//   }
//   rl.close();
//   return arr;
// }
// let arr = await getArrayInputs();
// let result = arr.filter((num) => num % 2 == 0);
// console.log(result);
//=====================================================================================
// 5.  Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
// • Input Example: [1, 2, 3], [4, 5, 6]
// • Output Example: [1, 2, 3, 4, 5, 6]
//=====================================================================================
// async function getArrayInputs() {
//   const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   let arr = [];
//   const arrSize = await rl.question("enter array size: ");
//   let arrSizeAsNumber = Number(arrSize);
//   for (let i = 0; i < arrSizeAsNumber; i++) {
//     const element = await rl.question(`enter arr[${i}]:`);
//     arr.push(Number(element));
//   }
//   rl.close();
//   return arr;
// }
// let arr1 = await getArrayInputs();
// let arr2 = await getArrayInputs();
// let result = [...arr1, ...arr2];
// console.log(result);
//=====================================================================================
// 6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday). (0.5 Grade)
// • Input Example: 2
// • Output Example: “Monday”
//=====================================================================================
// async function getDayNumber() {
//   const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   let result = await rl.question("enter a day number between 1 ~ 7: ");
//   rl.close();
//   return Number(result);
// }
// let day = await getDayNumber();
// switch (day) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid day");
//     break;
// }
//=====================================================================================
// 7. Create an array of strings and return their lengths using map method (0.5 Grade)
// • Input: ["a", "ab", "abc"]
// • Output Example: [1, 2, 3]
//=====================================================================================
// async function getArrayInputs() {
//   const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   let arr = [];
//   let arrSize = await rl.question("enter array size: ");
//   for (let i = 0; i < arrSize; i++) {
//     let element = await rl.question(`enter arr[${i}]: `);
//     arr.push(element);
//   }
//   rl.close();
//   return arr;
// }
// let arr = await getArrayInputs();
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   result[i] = arr[i].length;
// }
// console.log(result);
//=====================================================================================
// 8.  Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
// • Input Example: 15
// • Output Example: “Divisible by both”
//=====================================================================================
// async function getNumber() {
//   const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   let num = await rl.question("enter a number: ");
//   rl.close();
//   return num;
// }
// function isDivisibleByThreeAndFive(num) {
//   if (num % 3 == 0 && num % 5 == 0) {
//     return "number is divisible by three and five";
//   } else if (num % 3 == 0) {
//     return "number is divisible by three only";
//   } else if (num % 5 == 0) {
//     return "number is divisible by five only";
//   } else {
//     return "number is not divisible by three neither five";
//   }
// }
// console.log(isDivisibleByThreeAndFive(await getNumber()));
//=====================================================================================
// 9.  Write a function using arrow syntax to return the square of a number (0.5 Grade)
// • Input Example: 5
// • Output Example: 25
//=====================================================================================
// async function getNum() {
//   const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   let num = await rl.question("enter a number: ");
//   rl.close();
//   return num;
// }
// let num = await getNum();
// let sqrt = (n) => {
//   return n * n;
// };
// console.log(sqrt(num));
//=====================================================================================
// 10. Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
// • Input Example: const person = {name: 'John', age: 25}
// • Output Example: 'John is 25 years old'
//=====================================================================================
// let person = {
//   personName: "",
//   personAge: -1,
// };
// async function getPersonData() {
//   const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   person.personName = await rl.question("enter your name: ");
//   person.personAge = await rl.question("enter your age: ");
//   rl.close();
// }
// await getPersonData();
// function destructPersonData() {
//   const { personName, personAge } = person;
//   return `${personName} is ${personAge} years old`;
// }
// console.log(destructPersonData());
//=====================================================================================
// 11. Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
// • Input Example: 1, 2, 3, 4, 5
// • Output Example: 15
//=====================================================================================
// async function getSum() {
//   const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   let numbers = await rl.question("enter numbers: ");
//   let result = 0;
//   if (numbers > 0) {
//     for (let i = 0; i < numbers; i++) {
//       let num = await rl.question(`enter number ${i + 1}: `);
//       result += Number(num);
//     }
//   }
//   console.log(`sum = ${result}`);
//   rl.close();
// }
// getSum();
//=====================================================================================
// 12.  Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
// • Output Example: “Success”
//=====================================================================================
// function delayedSuccess() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Success");
//     }, 3000);
//   });
// }
// delayedSuccess().then((message) => {
//   console.log(message);
// });
//=====================================================================================
// 13.  Write a function to find the largest number in an array. (0.5 Grade)
// •  Input Example: [1, 3, 7, 2, 4]
// • Output Example: 7
//=====================================================================================
// let arr = [];
// async function getArray() {
//   const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   let arrSize = await rl.question("enter array size: ");
//   for (let i = 0; i < arrSize; i++) {
//     let element = await rl.question(`enter arr[${i}]: `);
//     arr.push(Number(element));
//   }
//   rl.close();
// }
// function getMax() {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   console.log(max);
// }
// await getArray();
// getMax();
//=====================================================================================
// 14.  Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
// •  Input Example: name: "John", age: 30}
// •  Output Example: ["name", "age"]
//=====================================================================================
// let person = {
//   name: "john",
//   age: 30,
// };
// function getPersonKeys() {
//   let keys = Object.keys(person);
//   return keys;
// }
// console.log(getPersonKeys());
//=====================================================================================
// 15.  Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
// • Input: "The quick brown fox"
// • Output: ["The", "quick", "brown", "fox"]
//=====================================================================================
// let str = "The quick brown fox";
// function splitString(string) {
//   return str.split(" ");
// }
// console.log(splitString(str));
//=====================================================================================
//=====================================================================================
// Part 2
// 1.  What is the difference between forEach and for...of? When would you use each? (0.5 Grade)
//=====================================================================================
/*
  forEach: is a built-in method that can be executed only if the array has one or more element and it is used when
  I need to execute a function that require to iterate over each element of the array and it cannot be stopped until it iterates over all of the array elements
  for example:
    let sum = 0;
    const numbers = [65, 44, 12, 4]; // array
    numbers.forEach(myFunction); // forEach executes myFunction on each element of the array
    function myFunction(item) {sum += item;} // sum now has 65 + 44 + 12 + 4
------------------------
  for ... of: is a normal for loop but has a special implementation, it can iterate over any iterable object like arrays, strings, maps, sets,
  and it can be stopped using break and can skip the element of the object using continue which makes it more flexable than forEach
    const arr = [1, 2, 3];
    for (const item of arr) { //iterate on all arr items and save the current element in item
      console.log(item); //log the current item
    }
*/
//=====================================================================================
// 2.  What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples
//=====================================================================================
/*
  hoisting is moving the declaration of an element to the top of the code, some initializations can be done before declaring a variable
  and some cannot be initialized before declaring it, for example:
    -------------------
    x = 5;
    console.log(x); // output: 5
    var x;
    -------------------
    x = 5;
    console.log(x); // output: error: Cannot access 'x' before initialization
    let x;
    -------------------
    x = 5;
    console.log(x); // output: error: Missing initializer in const declaration
    const x;
    -------------------
  so var is hoisted, and initialized but let and const are hoisted but not initialized

  normal functions are fully hoisted including their definition, but named functions using var
    -------------------
    sayHello();//works because sayHello is hoisted including their definition
    function sayHello() {
      console.log("hello");
    }
    -------------------
  in named functions only var is hoisted but its value is undefined, so its definition is not hoisted
    -------------------
    x(); // error: x is not a function but if we changed this line to console.log(x); it outputs undefined
    var x = function sayHello() {
      console.log("hello");
    };
    -------------------
  if the named function is let or const, only the declaration is hoisted
    -------------------
    x(); // error: x is not initialized
    let x = function sayHello() {
      console.log("hello");
    };
    -------------------

    Temporal dead zones is related to hoisting
    temporal dead zone is the scope between the initialization and declaration, for example
    console.log(x); //TDZ
    let x = 10;
    x here is hoisted but is not initialized so console.log(x) is inside the temporal dead zone
    unlike this example:
    console.log(x); // not in TDZ
    var x = 10;
    x here is hoisted and initialized with undefined then the program prints it in the log then initialize it with 10,
    so it is not in TDZ because it is initialized behind the scenes with undefined
*/

// =====================================================================================
// 3.  What are the main differences between == and ===?
// =====================================================================================
/*
    == is loose equality, comparing only content, meaning that if a string and int have the same number their equality will be true,
    let x = "3"; //string
    let y = 3; //int
    console.log(x == y); // output: true because x and y have the same content, no matter what their type is

    on the other hand === is strict equality, meaning that it compares both content and data type,
    for example:
    let x = "3"; // string
    let y = 3; // int
    console.log(x === y); //output will be false, even if both variables contain the same content, but their data type is not the same
*/

// =====================================================================================
// 4.  Explain how try-catch works and why it is important in async operations.
// =====================================================================================
/*
    try ... catch is so important for handling runtime errors, and it is important to use with async / await because it checks the status of await,
    for example in this application:
    async function fetchData() {
      try {
        let response = await fetch('https://api.example.com/data'); // if the data fetched successfully it continues in the try block
        let data = await response.json();// if the data parsed successfully it continues in the try block
        console.log(data);
      } catch (error) { // error here can be either because fetching the data or parsing the data from await lines
        console.log("Failed to fetch data: " + error.message);
      }
    }
    so, for that example, await tries to fetch the data behind the scenes, if it succeed it continues in the try block, if it fails it returns error object
    and breakes the try block and jump to catch block to handle the error instead of crashing
*/

// =====================================================================
// 5.  What’s the difference between type conversion and coercion? Provide examples of each.
// =====================================================================
/*
    Type conversion is explicitly converting a data type to another,for example:
      let y = "123"; // string
      let x = Number(y); // Number() converts a string into a number, so now x holds 123 as a number
      let z = String(x); // String() converts a number into a string, so now z holds "123" as a string
    Type coersion is changing the data types but behind the scenes, for example:
      console.log("5" + 2); // 2 will be concatenated with 5 and result "52" as a string
      console.log("5" - 2); // 5 will be converted to a number and perfomr 5 - 2 = 3 as a number
    + has a special functionality, if I try to perform operations like (string + "any other data type") JS converts the other data type into string and concatenate both
    other operations (- / * % **), JS tries to convert other data type to number to perform the operation (number + string = number)
*/
