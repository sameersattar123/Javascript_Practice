// program to check if a variable is undefined or null

function  checkNull(variable){
    if (variable == null) {
        console.log("The variable is undefined or null")
    }else {
        console.log("The variable is neither undefined nor null")
    }
}

checkNull(undefined)
checkNull(4)
checkNull("HELLO")
checkNull(null)
