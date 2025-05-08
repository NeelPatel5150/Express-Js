var express = require('express');
var app = express();
var multer = require('multer');
app.use(express.static("../Public",{index:'task20.html'}));

var store = multer.diskStorage({
    destination:"MyFolder",
    fileneame:function(req,file,cb){
        cb(null,file.fieldname + '-' + Date.now() + '.docx');
    }
})

var upload = multer({storage:store});

app.post("/uploadFile",upload.array("mypic",5),(req,res)=>{
    if(req.files){
        res.set('Content-Type', 'text/html');

        for(i of req.files){
            res.write("<h2>File <span style='color:red'>" + JSON.stringify(i.originalname) + "</span> has beenuploaded </h2>")
        }
        res.send()
    }
})

app.listen(6799,()=>{
    console.log("Server is running on port 6799")
})