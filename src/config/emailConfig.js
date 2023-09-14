const nodemailer = require("nodemailer");

const {MAIL_ID,MAIL_PASS} = require("./serverConfig");

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: MAIL_ID,
    pass: MAIL_PASS
  }
});

module.exports = transporter;