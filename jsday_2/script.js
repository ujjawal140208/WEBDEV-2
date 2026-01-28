// push: Adds an element to the end of the array
// pop: Removes an element from the end of the array
// shift: Removes an element from the beginning of the array
// unshift: Adds an element to the beginning of the array

// // q- reverse the array using these methods

// let arr = ["banana", "apple", "mango", "grapes"];
// let reversedArr = []; 
// while (arr.length > 0 ){ 
//     let element = arr.pop(); 
//     reversedArr.push (element);
// } 
//  console.log(reversedArr); 

// ---------------------------------------------x---------------------------------------------x---------------------------------------------//


// // q- remove all negative numbers from an array
// let numbers = [10, -5, 3, -1, 0, -7, 8];
// let positivbenum= [];
// while (numbers.length > 0) {
//     let num = numbers.pop();
//     if (num >= 0) {
//         positivbenum.push(num);
//     }
// }
// console.log(positivbenum);

// ---------------------------------------------x---------------------------------------------x---------------------------------------------//

// q- check if array is palindrome or not
function isPalindrome(){
let arr_2= [1,2,3,2,1];
let arr_3=[];
let arr_4=[...arr_2]; 
while (arr_2.length > 0) {
    let element = arr_2.pop();
    arr_3.push(element);
}
console.log(arr_3);
console.log(arr_4);

for (let i = 0; i < arr_4.length; i++) {
    if (arr_4[i] !== arr_3[i]) {
        return ("not palindrome");
    } else {
        return ("palindrome");
    } 
}

}

console.log(isPalindrome());



// ---------------------------------------------x---------------------------------------------x---------------------------------------------//


// Q- remove all duplicates element from a array
let arr_5 = [1, 2, 3, 2, 4, 1, 5, 3];
let Arr = [];
while (arr_5.length > 0) {
    let element = arr_5.pop();
    if (!Arr.includes(element)) {
        Arr.push(element);
    }

}
console.log(Arr);

// Q- split even and odd numbers from a given arrays
// Q- move all zeroes to the end of the array