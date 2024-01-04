const express = require("express")
const app = express();

const port = 4000;

app.get("/" , (req , res) => {
    res.send("Hello World")
})
app.get("/sameer" , (req , res) => {
    res.send("Hello World sameer")
})

app.get("/chai" , (req , res) => {
    res.send("<h1>Hello World chai</h1>")
})

app.listen(port , () => {
    console.log(`Example app listening on port ${port}`) 
})