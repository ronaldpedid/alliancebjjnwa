module.exports = (app) => {
  app.post('/api/form', (req, res) => {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(keys.sgApiKey);

    const msg = {
      to: 'elementfayt@gmail.com',
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
    sgMail.send(msg);
  });

  res.redirect('/');

}