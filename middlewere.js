const express = require('express');
const app = express();

app.use("/",(req, res, next) => {
    res.set("Content-Type", "text/html");
    res.write("<h1 style='color:blue'>Welcome to Express Middleware</h1>");
    next();
},
(req, res,next) => {
    res.write("<h1 style='color:green'>This is the second middleware</h1>");
    next();
},
(req, res) => {
    res.write("<h1 style='color:orange'>This is the third middleware</h1>");
    res.send();
})

app.listen(3001, () => {
    console.log("Server started at port 3001");
})