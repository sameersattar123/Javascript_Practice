function checkString(str){
    if (str.startsWith("s") && str.endsWith("r")) {
        console.log("Your name start with s and end with r")
    } else if(str.startsWith("s")){
        console.log("Your name start with s")
    } else if (str.endsWith("r")){
        console.log("Your name end with r")
    } else {
        console.log('The string does not start with s and does not end with r');
    }
}

checkString("sameer")