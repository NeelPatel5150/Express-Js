// write a sript to meet foll requirements. 
// 1) create index.html page and open it on localhost
// 2) after clicking submit button, it should jump to savesessionpage.store  username in session.
// 3) After saving session, redirect to fetchsession page and read session value.  put a logout link button here.
// 4) destroy the session on this page and redirect to index.html

var express = require('express');
var app = express();
var ses = require('express-session');
app.use(express.static("../Public",{index:'task14.html'}));

app.use(ses({
    secret: 'Neel Patel',
    resave: false,
    saveUninitialized: false,
}));

app.get("/savesession",(req,res)=>{
    req.session.uname = req.query.uname;
    req.session.password = req.query.password;
    res.redirect("/fetchsession");
});

app.get("/fetchsession",(req,res)=>{
    res.write("<h1>Welcome " + req.session.uname +"</h1>")
res.write("<a href='/deletesession'>Delete Session</a>")
res.send();
});

app.get("/deletesession",(req,res)=>{
    req.session.destroy();
res.redirect('/')
//Also try res.clearCookie(‘connect.sid’)
//res.send(“Session Cookie cleared”)
});

app.listen(6177,()=>{
    console.log("Server started at port 6177")
})