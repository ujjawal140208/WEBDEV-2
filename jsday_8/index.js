// function handleChange(event){
//     document.getElementById(output)
// }

document.getElementById("myinput").addEventListener("change",(event)=>{
// here event is the synthetic evnt which comes under addeventlister's callback function. it will print the vent object ehich stores all information about hte form tag
    console.log(event.target.value);
// event.target wil print the targeted element and event.target.value will print the value of the targeted element which is the input tag in this case.  
    document.getElementById("output").textContent = "CHANGED";


})