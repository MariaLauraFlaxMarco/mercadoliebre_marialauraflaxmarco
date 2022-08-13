const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const path = require("path");
app.use(express.static("public"));

app.listen(process.env.PORT, ()=>{
    console.log("Servidor corriendo en el puerto"+ process.env.PORT);

} )

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
}) 

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname,"/views/register.html"));
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname,"/views/login.html"));
})