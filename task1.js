var app = require('express')();

app.get('/',(req,res)=>{
    res.end(req.params.id)
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})