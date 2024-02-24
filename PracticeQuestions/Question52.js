// program to create a countdown timer

let countDownTime = new Date().getTime() + 24 * 60 * 60 * 1000;

// console.log(countDownTime);

let x = setInterval(() => {
  let now = new Date().getTime();
  let timeLeft = countDownTime - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

  if (timeLeft < 0) {
    clearInterval(x);
    console.log("CountDown Finished");
  }
}, 1000);
