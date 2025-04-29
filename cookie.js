var express = require("express");
var app = express();
var cp = require("cookie-parser");
app.use(cp());

app.get("/",(req,res)=>{
    res.cookie("uname","Neel")
    res.cookie("lname","Patel")
    res.cookie("contact","1234567890",{expires:new Date(Date.now()+10000)})
    res.cookie("email","neel258@gmail.com",{maxAge:7000})
    res.send("Cookies are set successfully")
})

app.get("/read",( req,res)=>{
    res.set("Content-Type","application/json");
    res.write(JSON.stringify(req.cookies));
    res.write(req.cookies.uname+"<br>");
    res.send("Cookies are read successfully")
})

app.get("/clear",(req,res)=>{
    res.clearCookie("uname")
    res.send(req.cookies)
})

app.listen(9090,()=>{
    console.log("Server started at port 9090")
})