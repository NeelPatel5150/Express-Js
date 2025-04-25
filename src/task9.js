var express = require('express');
var app = express();
app.use(express.urlencoded({ extended: false }));

app.use(express.static("../Public",{index: ' ljform.html'})); 
app.post("/login",(req,res)=>{ 
    if( req.body.uname == 'admin' ){  
        res.write(`<h1 style="color:green">Hey ${req.body.uname},Welcome!</h1><br>`)  
    } 
    else{  
        res.write(`<h1 style="color:red">Please login with Admin name</h1>`); 
    }      
    res.send();  
}) 
app.listen(5223); 