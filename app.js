const express = require("express");
const app = express();

app.set("view engine", 'ejs')


app.use((req, res, next)=>{
    console.log("This is middleware");
    const a = 2;
    const b = 3;
    console.log(a+b);
    return next()
})

app.get("/", (req, res)=>{
    res.render('index')
});
app.get('/about', (req, res)=>{
    res.send("Its me, Shahmir Ali Qureshi!");
})
app.get('/profile', (req, res)=>{
    res.send("This is the Profile Of Shahmir Ali Qureshi!")
})
app.listen(3000)