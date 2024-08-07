require('dotenv').config()


console.log("backend started");

const express=require("express");
const app=express();

const port =3005;
app.get("/", (req,res)=>{
    res.send("welcome to backend tutorial ");
})

app.listen(port,()=>{
    console.log(`app is listening at http://localhost:/${port}`)
})