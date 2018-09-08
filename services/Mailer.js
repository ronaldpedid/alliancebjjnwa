const helper = require('sendgrid').mail;
const from_email = new helper.Email('contact@alliancebjjofnwa.com');
const to_email = new helper.Email('elementfayt@gmail.com');
const subject = 'Seeking informaiton about Jiu Jitsu.';
const content = req.body;