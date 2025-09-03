const express = require("express");
const morgan = require("morgan");

const app = express();

app.set("view engine", "ejs");

app.use(morgan('dev'));

app.get('/',(req, res, next)=>{
    const a = 2;
    const b = 3;
    console.log(a+b);
    next();
},(req,res)=>{
    res.send("Bas bhai thak gaya")
})
app.get("/persons",(req, res)=>{
    res.send(["Shahmir", "Shayan", "Mateen", "Ayaan"]);
})
app.get('/res',(req,res)=>{
    res.render("index");
})
app.listen(3000)