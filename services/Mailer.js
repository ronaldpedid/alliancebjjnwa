const helper = require('sendgrid').mail;
const from_email = new helper.Email('contact@alliancebjjofnwa.com');
const to_email = new helper.Email('elementfayt@gmail.com');
const subject = 'Seeking informaiton about Jiu Jitsu.';
const content = req.body;



//   function send(to, from, subject, phone, message, format) {
//     return new Promise((resolve, reject) => {
//       let email = sgHelper.Mail(htmlEmail);

//       // email.setTo(new sgHelper.To(to))
//       email.setForm(new sgHelper.Email(from))
//       email.setSubject(
//         new sgHelper.Email(subject)
//       );
//       email.setPhone(new sgHelper.Phone(phone));
//       email.addMessage(new sgHelper.Message(format || 'text/plain', message));
//     })
//   }

//   if (to.indexOf(',')) {
//     to = to.split(',');

//     let p = new sgHelper.Personalization();

//     to.forEach((e) => {
//       p.addTo(new sgHelper.Email(e));
//     });

//     email.addPersonalization(p);
//   } else {
//     email.addTo(new sgHelper.Email(to));
//   }
// });