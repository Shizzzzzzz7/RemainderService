const nodemailer = require("nodemailer");
const transporter =require("../config/emailConfig");

const mailSender = async(mailFrom, mailTo, mailSubject, mailText)=>{
    try{const response = await transporter.sendMail({
        from: mailFrom,
        to: mailTo,
        subject: mailSubject,
        text: mailText

    });

    console.log(error);

}catch(error){
        console.log(error);
    }
}

module.exports = mailSender;