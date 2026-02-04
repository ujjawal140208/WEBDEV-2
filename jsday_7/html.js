const para = document.createElement("p")
para.textContent = "This paragraph was added by JavaScript."
console.log(para)
document.getElementById("content").appendChild(para) 

document.querySelector("#content p").remove()    

const image = document.createElement("img");
image.setAttribute("src", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg");
image.setAttribute("alt", "A beautiful scenery");

const gallery = document.getElementById("gallery"); 
gallery.appendChild(image); 

setInterval(() => {
    const date= new Date();
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    document.getElementById("clock").textContent = `Time: ${hours}:${minutes}:${seconds}`;
}, 1000);