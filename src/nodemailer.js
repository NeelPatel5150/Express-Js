var nm = require('nodemailer');

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
    subject:'Hello Neel Bhai Kaise Ho',
    text:"hello Express Js",
    html:'<h1>Testing On Node Mailer</h1>'
};

trans.sendMail(mailoption,(err,info)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Email Sent: "+info.response);
    }
})