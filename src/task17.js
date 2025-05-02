var express = require("express");
var app = express();
var path = require("path");
var sp = path.join(__dirname, "../Public");
app.set("view engine", "pug");

app.get("/",(req, res) =>{
    res.render(sp+"/one")
})

app.get("/data", (req, res) => {
    res.set("content-type", "text/html");
    res.send("<h1>Welcome "+req.query.uname+" Your Email is "+req.query.email+"</h1>")
})

app.listen(9000, () => {
    console.log("Server is running on port 9000");
})