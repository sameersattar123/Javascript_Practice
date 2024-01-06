import dotenv from "dotenv"
import express from "express";

dotenv.config();
const app = express();

app.get("/" , (req , res) => {
    res.send("Hello World") 
})
app.get("/sameer" , (req , res) => {
    res.send("Hello World sameer") 
})

app.get("/chai" , (req , res) => {
    res.send("<h1>Hello World chai</h1>")
})

app.listen(process.env.PORT , () => {
    console.log(`Example app listening on port`) 
})