var app = require('express')();

app.get('/', function (req, res) {
    res.send('Hello World!');

    app.use((req,res)=>{
        res.status(404).send("Page Not Found");
    })
})

app.listen(3000, function () {  
    console.log('Example app listening on port 3000!');
})