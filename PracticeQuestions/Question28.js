function countStr(str , letter){

    let count = 0

    for (let i = 0; i < str.length; i++) {
           
        if (str.charAt(i) == letter) {
            count ++
        }
    }

    return count
}

const result = countStr("sameer sattar" , "a")
console.log(result)
