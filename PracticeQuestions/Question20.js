// program where the user has to guess a number generated by a program

function guessNumber(){

    const randomNumber = Math.floor(Math.random()*10) + 1
    console.log(randomNumber)

    let number = 10;

    if ( number == randomNumber) {
      console.log("You guessed the correct number! ")  
    } else {
        console.log("You can not guessed the correct number! ")  
    }
}

guessNumber()