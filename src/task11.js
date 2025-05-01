var express = require('express');
var app = express();
var cp = require('cookie-parser');
app.use(cp());

app.use(express.static("../Public",{index:'task11.html'}));

app.get("/next",(req,res)=>{
    res.cookie("fname",req.query.fname);
    res.cookie("lname",req.query.lname);
    res.cookie("pass",req.query.password);
    res.redirect("/admin");
})

app.get("/admin",(req,res)=>{
    res.clearCookie("lname")
    res.send(req.cookies)
})

app.listen(9000,()=>{
    console.log("Server started at port 9000")
})