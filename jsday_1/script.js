// a = "hello world"
// console.log(a);
// var a;
// In hosting variable decalaration and function decalaration will move to the top of the scope. 
// Hosting will applicable for var variables only not for let and const. 

// TDZ => Temporal Dead Zone 
// when we declare the variable with let or const without its proper initialization then the variable lies in tdz until its proeper initializatin.

// Q-1 Take an array with length 10 and put 10 differnt student marks in between 0 to 40 and check which values is pass or fail. (pass marks = 16 and fail < 16)

// let marks = [10,20,30, 4, 15, 25, 35, 12, 8, 18];
// let passed = marks.filter((mark) => {
//     if (mark >= 16) {
//         console.log(mark, " is passed");
//     } else {
//         console.log(mark, " is failed");
//     }
// });
// let failed = marks.filter((mark) => mark < 16);

// for (let i = 0; i < passed.length; i++) {
//     console.log(passed[i], " is passed");
//     for (let j = 0; j < failed.length; j++) {
//         console.log(failed[j], " is failed");
//     }

// }

// Q-2 find the sum of all the elements inside an array with for loop.

// let av= [1,2,3,4,5,6,7,8,9,10];
// let sum = 0;
// for (let i = 0; i <av.length;i++){
//     sum += av[i];
// }

// console.log("The sum of all the elements in the array is: ", sum);


// let num = [1,2,3,4,5];
// let sum = num.reduce((acc, val) => acc + val, 0); acc is accumulator which will store the first value of the array and sum after iteration.
// console.log("The sum of all the elements in the array is: ", sum);

// SOME AND EVERY METHOD
// some method will return true if any one of the element satisfy the condition otherwise false.
// every method will return true if all the elements satisfy the condition otherwise false.

// let numbers = [1,2,3,4,5,6,8,10];

// let isEven = numbers.some((num) => num % 2 === 0);
// console.log("Are all numbers even? ", isEven);

// let isOdd = numbers.every((num) => num % 2 !== 0);
// console.log("Are all numbers odd? ", isOdd);


// -------------------------------------------x----------------------------------x---------------------x------------------------------x

// day-2 



// console.log(0.1 + 0.2); // ouput- 0.30000000000000004
// // console.log(0.1 + 0.2 === 0.3); // ouput- false
// console.log([]==0)  ; // ouput- true
// console.log([]===0)  ; // ouput- false
// // to solve this problem we can use toFixed() method
// console.log((0.1 + 0.2).toFixed(2)); // ouput- 0.30
// console.log(Number((0.1 + 0.2).toFixed(2)) === 0.3); // ouput- true
//  console.log([]+{}); ouput- "[object Object]"
//  console.log({}+[]); ouput- 0

// console.log(NaN === NaN); // output- false

// typeof NaN; // "number"
// console.log(typeof NaN);