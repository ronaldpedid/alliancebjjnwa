
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const keys = require('./keys/keys');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


app.post('/api/form', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>${req.body.name}</li>
        <li>${req.body.email}</li>
        <li>${req.body.phone}</li>
        
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
      `;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: keys.googleUserName,
        pass: keys.googleEmailPassword
      }
    })

    let mailOptions = {
      from: 'noreply@alliancebjjofnwa.com',
      to: 'elementfayt@gmail.com',
      replyTo: 'noreply@alliancebjjofnwa.com',
      subject: 'BJJ Website Reply',
      text: req.body.message,
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      }
      console.log('Message Sent');
    })

  })
});

let PORT = 8000;
let PORT_ENV = process.env.PORT;



/* production only */
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets ie: main.css/main.js
  app.use(express.static('client/dist'));
  app.use('/dist', express.static(path.join(__dirname, 'public')));
  //express will serve up the index.html file if it doesn't recognize the route.
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  });
}




app.listen(PORT_ENV || PORT, function () {
  console.log('port is currently running on ' + PORT);
});




