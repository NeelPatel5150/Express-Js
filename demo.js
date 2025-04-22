var express = require('express');
var app = express();

app.get('/',(req,res)=>{
    res.set("content-type","text/html")
    res.write("<h1>Hello World</h1>")
    res.write("<h2>Welcome to Express</h2>")
    res.end()
})

app.get('/about',(req,res)=>{
    res.set("content-type","text/html")
    res.write("<h1>About Page</h1>")
    res.write("<h2>Welcome to Express</h2>")
    res.end()
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})