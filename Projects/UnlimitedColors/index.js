// generate a random color
const randomColor = function(){
    let Hex = '#0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += Hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

// console.log(randomColor());
let intervalId;

function startChangingColor(){
    if (!intervalId) {
        intervalId = setInterval(changeBg, 1000);
    }
    function changeBg(){
        document.body.style.backgroundColor = randomColor();
    } 
}

function stopChangingColor(){
    clearInterval(intervalId);
    intervalId = null
} 
let start = document.querySelector("#start").addEventListener("click" , startChangingColor)
let stop = document.querySelector("#stop").addEventListener("click" , stopChangingColor)