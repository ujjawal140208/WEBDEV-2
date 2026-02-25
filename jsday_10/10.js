// promise is used to handle asynchronus function in a better way then callback hell.
// pro,ise has three states:
// 1. pending: initial state, neither fulfilled nor rejected.
// 2. fulfilled: operation completed successfully.
// 3. rejected: operation failed.
// promise is an object which is returned by a function which is used to handle asynchronus function in a better way then callback hell.
// promise handling:
// promise consumer: promise.then(), promise.catch()
// 1. then: it is used to handle the fulfilled state of the promise.
// 2. catch: it is used to handle the rejected state of the promise.

let pro = new Promise((resolve, reject) => {
    let proposal = "false";
    if (proposal === "true") {
        resolve();
    }
    else{
        reject();
    }
})
pro.then(() => {console.log("proposal accepted")}).catch(() => {console.log("proposal rejected")});