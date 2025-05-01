var express = require('express');
var app = express();
var cp = require('cookie-parser');
app.use(cp());

app.use(express.static("../Public",{index:'task12.html'}));

app.get("/feedback",(req,res)=>{
    const {name , email , message , rating} = req.query;
    const feedback = {name , email , message , rating};
    res.cookie("feedback",feedback,{maxAge:1000})
    res.send("Thank You For FeedBack! <br> <a href='/details'>Show feedback</a>")
})

app.get("/details",(req,res)=>{
    
    const feedback = req.cookies.feedback;

    
    if(feedback){
        res.send(`
            <h1>Feedback Details</h1>
            <p><strong>Name:</strong> ${feedback.name}</p>
            <p><strong>Email:</strong> ${feedback.email}</p>
            <p><strong>Message:</strong> ${feedback.message}</p>
            <p><strong>Rating:</strong> ${feedback.rating}</p>
            <a href="/" > logout </a>`);
        } 
        else 
        {
            res.send('No feedback available.');
        }
        });
        app.listen(3000, () => {
        console.log('Server is running on port 3000');
})