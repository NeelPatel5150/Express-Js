var express = require("express");
var app = express();

app.use(express.static("../Public",{index:'demo.html'}));

app.get("/login",(req,res,next)=>{
    res.set("Content-Type","text/html");
    res.write("<h1>Welcome "+req.query.name+"</h1>")
    res.write("<h1>Email-Id:"+req.query.email+"</h1>")
    next();
})

app.get("/login",(req,res,next)=>{
    if(req.newsletter=="on")
    {
        res.write("<h2>Thank You For Subscription</h2><a href='/'>Logout<a>")
    }
    else{
        res.write("<h3>You can subscribe to get daily updates</h3><a href='/subscribe'>Subscribe</a></center>");
    }
    next();
})

app.get("/subscribe",(req,res)=>{
    res.set("Content-Type","text/html");
    res.write("<h2>ThankYou For Your Subscription</h2><a href='/'>Logout<a>")
    res.send()
})

app.listen(5002, () => {
    console.log("Server started at port 5002");
})