const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach((value) => {
    // console.log(value)
})

coding.forEach(function (values){
   //  console.log(values)
})

const newLang = coding.forEach( function (value) {
    return value
})

// console.log(newLang) // undefined ** forEach loop does not return a new array **

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
 myCoding.forEach(item => console.log(item.languageFileName))