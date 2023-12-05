const clock = document.querySelector(".clock")

setInterval(() => {
    const date = new Date();
    // console.log(date.toLocaleDateString())
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);