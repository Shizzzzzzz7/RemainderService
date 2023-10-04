const nodemailer = require("nodemailer");
const transporter =require("../config/emailConfig");

const TicketRepository = require("../repository/ticket-repository");

const ticketRepository = new TicketRepository();

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

const fetchPendingMails = async()=>{
    try {
        const response = await ticketRepository.get();
        return response;
    } catch (error) {
        console.log(error);
        console.log("Service Error");
        throw {error};
        
    }
}

const createNotification = async(data)=>{
    try {
        const response = await ticketRepository.create(data);
        return response;
    } catch (error) {
        console.log("Service Error");
        throw {error};
    }
}

const updateStatus = async(ticketId, data)=>{
    try {
        const response = await ticketRepository.update(ticketId,data);
        return response;
    } catch (error) {
        throw {error};
    }
}
module.exports = {
    mailSender,
    fetchPendingMails,
    createNotification,
    updateStatus
};