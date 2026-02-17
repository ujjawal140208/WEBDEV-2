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