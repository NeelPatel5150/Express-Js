var express = require('express');
var app = express();
var nm = require('nodemailer');
app.use(express.static("../Public",{index:"task21.html"}));
// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+"/task21.html")
// })

app.get("/feedback",(req,res)=>{
    var trans = nm.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth:{
            user:"kp340135@gmail.com",
            pass:'fuir qtto rpsu zgnb'
        }
    });

    var mailoption = {
        from:'kp340135@gmail.com',
        to:'neelp2106@gmail.com',
        subjext:'Feedback Response',
        html: "<h1>Hello "+req.query.uname+"!</h1><h2> Thank you for submitting the feedback.<br> Your feedback: <span style=color:red>"+req.query.feedback+"</span></h2><h3> Additional comments: "+req.query.comments+"</h3>"
    };

    trans.sendMail(mailoption,(err,info)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Email Sent: "+info.response);
        }
    })
    res.send("Thank you for your feedback.");
})

app.listen(5001,()=>{
    console.log("Server started on port 5001")
})