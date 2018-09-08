module.exports = (app) => {
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
        host: 'mail.google.com',
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

}