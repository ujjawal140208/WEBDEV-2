// // // Promise Chaining
// // function print(num){
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             console.log(num);
// //             resolve();
// //         }, 1000);
// //     });
// // }
// // // this structure is called promise chaining, it is used to handle multiple asynchronous operations in a sequential manner.
// // // Each then() method returns a new promise, allowing us to chain multiple then() calls together. 
// // // This way, we can ensure that each asynchronous operation is completed before the next one starts.
// // print(1)
// // .then(() => print(2))
// // .then(() => print(3))
// // .then(() => print(4))
// // .then(() => print(5))

// // Async and Await
// // async and await are used to handle asynchronous operations in a more synchronous way.
// // async is used to declare a function as asynchronous, it returns a promise.
// // await is used to wait for a promise to resolve, it can only be used inside an async function.

// const pro = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("num");
//         resolve();
//     }, 2000);
// })

// // function getData(){
// //     pro.then((res)=>console.log(res))
// //     console.log("after promise");
// // }
// // why async and await exist?

// // to avoid promise chaining
// // to ececute asynchronous code in a synchronous way, making it easier to read and understand.
// // to handle promise in a better way

// // // // IMPORTANT : async function always returns a promise.

// async function demo(){
//     return "Hello World";
// }
// console.log(demo()); // it will return a promise.

// // await : it will pause the async function until the promise is resolved.


// async function fetchData(city) {
//     try {
//         const API_key = "14ac0ec299dff0bd71094539fe83cf5a";
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);

//         const data = await response.json();
//         console.log(city);
//         console.log(data.main.temp);
//         console.log(data.main.humidity);
//     } catch (err) {
//         console.error(err);
//     }
// }


let history = [];

async function getWeather() {
    let city = document.getElementById("cityInput").value;

    
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    let API_key = "14ac0ec299dff0bd71094539fe83cf5a";

    try {
        let response = await fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city +
            "&appid=" + API_key +
            "&units=metric"
        );

        let data = await response.json();

        if (data.cod != 200) {
            document.getElementById("result").innerHTML = "City not found ❌";
            return;
        }

        
        document.getElementById("result").innerHTML =
            "City: " + data.name + "<br>" +
            "Temperature: " + data.main.temp + " °C<br>" +
            "Humidity: " + data.main.humidity + "%";

        
        if (!history.includes(data.name)) {
            history.push(data.name);
        }

        showHistory();

    } catch (error) {
        console.log(error);
        document.getElementById("result").innerHTML = "Error fetching data ❌";
    }
}


function showHistory() {
    let list = document.getElementById("history");
    list.innerHTML = "";

    for (let i = 0; i < history.length; i++) {
        let li = document.createElement("li");
        li.innerText = history[i];

        
        li.onclick = function () {
            document.getElementById("cityInput").value = history[i];
            getWeather();
        };

        list.appendChild(li);
    }
}



function clearHistory() {
    history = [];
    document.getElementById("history").innerHTML = "";
}
