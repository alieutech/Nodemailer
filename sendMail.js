const nodemailer = require('nodemailer')
require('dotenv').config()
const path = require('path')


const transporter = nodemailer.createTransport({
    service: 'gmail', 
    host: "smtp.gmail.email",
    port: 587,
    secure: false,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD
      },
  });
  
  const mailOptions = {
    from: {
        name: 'Alieutech',
        address: process.env.USER_EMAIL // sender address
    },
    to: 'examplesend@gmail.com', // list of receivers
    subject: 'Test Email ✔',
    text: 'Hello! This is a test email.',
    attachments: [
        {
            filename: 'web-dev.jpg',
            path: path.join(__dirname, 'web-dev.jpg'),
            contentType: 'image/jpg'

        }
    ]
  };
  
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
});
   