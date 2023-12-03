// for in loop (most used in objects)

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
   // console.log(key); // only keys 
}
for (const key in myObject) {
  // console.log(myObject[key]); // key values
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
   console.log(programming[key])
}

