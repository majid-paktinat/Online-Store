require('dotenv').config();

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

let mailOption = {
    from: 'farazahmedbutt@gmail.com',
    to: 'faraz_ahmed10@hotmail.com',
    subject: 'Testing nodemailer',
    text: "yes it works!"
};

transporter.sendMail(mailOption, function(err, data){
    if (err) {
        console.log('Error Occurs', err);
    } else {
        console.log('Email sent!');
    }
});