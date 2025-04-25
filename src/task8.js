var expr = require("express"); 
var app = expr(); 
app.use(expr.static("../public",{index: 'text.html'})); 
app.get("/login",(req,res)=>{ 
    res.set("content-type","text/html"); 
 
    t1 = (req.query.message).split(".");  
    for(i in t1){ 
        res.write(t1[i]+ "</br>"); 
    } 
    res.send(); 
}); 
app.listen(5121,()=>{ 
    console.log("server start"); 
}); 