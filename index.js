
const express = require('express');
const path = require('path');
const keys = require('./keys/keys');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.post('/api/form', (req, res) => {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(keys.sgApiKey);

  const msg = {
    to: keys.sgSender,
    from: req.body.email,
    subject: 'Information for Jiu Jitsu',
    text: req.body.message,
    html: `<h3>Contact Details</h3>
        <ul>
          <li>${req.body.name}</li>
          <li>${req.body.email}</li>
          <li>${req.body.phone}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>`
  };
  console.log(msg);
  sgMail.send(msg);
  res.redirect('/');
})


let PORT = 8001;
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




