// Write express JS script to pass data like message, name and id from express application to pug
// template in h1, h2 and h3 tags respectively and display data in browser. (Both file in same folder)

var express = require('express');
var app = express();
app.set("view engine","pug");

app.get("/",(req,res)=>{
    res.render(__dirname+"/task18",{name:"Neel Patel",message:"Hello Express JS!!!",id:123});
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})