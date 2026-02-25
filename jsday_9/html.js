console.log("starting....");
function dowork(cb){
    setTimeout(() => {
        cb("working....");
    }, 2000);
}
dowork((result) => {
    console.log(result);
});
console.log("ending....");

// js single threded syncronus programming language
// what is callback function?
// callback function is a function which is passed as an argument to another function and is executed after some operation is completed. It is used to handle asynchronous operations in JavaScript.
// what is asynchronous programming?
// asynchronous programming is a programming paradigm that allows the program to execute other tasks while waiting for an operation to complete. It is used to handle time-consuming operations such as network requests, file I/O, etc. in JavaScript.