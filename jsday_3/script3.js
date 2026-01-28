// split: 
let str = "Hello, how are you?";
let words = str.split("a");
console.log(words); 

// Q- find out the occurrence of r in the give string using split: 
let string = "tu meri me tera me teri tu mera";
let count = string.split("r");
console.log(count.length - 1)
// ----------------------------------------x-------------------------------------x---------------------------------------------//

// types of functions:
//           Regular function
//           arrow function
//           callback function
//           anonymous function
//           first class function
//           higher order function
//           self invoking function (iife)


// -----------------------------------x-----------------------------------------------x--------------------------------------------//

// regular function: needs return and function keyword. asynchronous in nature.
function demo(){
    console.log("this is demo function");
}
demo()

function sample(){
    console.log("this is sample function");
}
sample()

// arrow function: does not need return and function keyword. and it will perform asynchronously.
const test =(c,d) => 
    c+d
console.log(test(3,4));


//  if arrow function has only one statement then we can remove curly braces and return keyword. but if it has more than one statement then we have to use curly braces and return keyword.

const add = (a,b) => {
    return a+b;

}  
console.log(add(5,3));

// -------------------------x-------------------------------------------------------x--------------------------------------------//

// Anonymous function: 

let arr = [1,2,3,4,5]
let res = arr.map(function(x){
    return x+2
})
console.log(res)

// settimeout uses callback and timedelay as parameter

// setTimeout(()=>{
//     alert("hello")

// },5000)

// setInterval(()=>{
//     console.log("sign up")

// },1000)


// let date = new  Date();
// console.log(date)

//---------------------------------x----------------------------------------------x--------------------------------------//


