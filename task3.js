var app = require('express')();

var data = {name:'Neel', age: 22, city: 'Pune'}

app.get('/',(req,res)=>{
    res.send(data);
})

app.listen(3000,()=>{   
    console.log('Server is running on port 3000');
})