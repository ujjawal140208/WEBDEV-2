// task 1:-->

const profile = document.getElementById('profile');
profile.style.border = '2px solid black';
profile.style.padding = '15px';
profile.style.width = '250px';
profile.style.backgroundColor = '#316b6b';
profile.style.textAlign = 'center';

// task 2:--> 
const important = document.getElementsByClassName('important');

for (let i = 0; i < important.length; i++){
    important[i].style.color = 'red';
    console.log(important[i].textContent);
}

