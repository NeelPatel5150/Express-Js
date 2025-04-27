const express=require("express");
const app=express();

app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname));

app.post("/check",(req,res,next)=>{
    if(req.body.uname=="admin")
    {
        next();
    }
    else{
        res.send("<h1 style='color:red'>Invalid User</h1>");

    }
});

app.post("/check",(req,res)=>{
    res.write("<h1 style='color:green'>Welcome "+req.body.uname+"</h1>");
}).listen(3001,()=>{
    console.log("Server started at port 3001");
})