const express = require("express");
const morgan = require("morgan");

const app = express();

app.set("view engine", "ejs");

app.use(morgan('dev'));

app.use((req, res, next)=>{
    console.log("This is middleware");
    const a = 2
    const b = 4;
    console.log(a+b);
    return next();

})

app.get('/',(req,res)=>{
    res.send("Bas bhai thak gaya")
})
app.get("/persons",(req, res)=>{
    res.send(["Shahmir", "Shayan", "Mateen", "Ayaan"]);
})
app.get('/res',(req,res)=>{
    res.render("index");
})
app.listen(3000)