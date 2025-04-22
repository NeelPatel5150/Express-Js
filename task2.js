var app = require('express')();

app.get('/user/:userId/test/:test',(req,res)=>{
res.end(req.params);
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})