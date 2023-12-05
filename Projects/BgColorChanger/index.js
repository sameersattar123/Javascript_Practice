const buttons = document.querySelectorAll(".button")
// console.log(buttons)
const body =  document.querySelector("body")

buttons.forEach((button) => {
    button.addEventListener("click" , (e) => {
        // console.log(e);
        // console.log(e.target.id)
        switch (e.target.id) {
            case "blue":
               body.style.backgroundColor = e.target.id             
                break;
            case "purple":
                body.style.backgroundColor = e.target.id
                break;
            case "orange":
                body.style.backgroundColor = e.target.id
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id
                break;
            case "grey":
                body.style.backgroundColor = e.target.id
                break;
            default:
                body.style.backgroundColor = "white"
                break;
        }
    })
})