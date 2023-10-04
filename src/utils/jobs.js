const cron = require("node-cron");
const transporter =require("../config/emailConfig");

const emailService = require("../service/email-service");

const setupJobs = ()=>{
    cron.schedule('*/1 * * * *', async()=>{
        console.log("Running Task every 1 Min");
        const response = await emailService.fetchPendingMails();
        response.forEach((email)=>{
            transporter.sendMail({
                to: email.recepientEmail,
                subject: email.subject,
                text: email.content
            }, (err, data)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log(data);
                    emailService.updateStatus(email.id, {status:"SUCCESS"});
                }
            });
        });
        console.log(response); 
    });
}

module.exports = setupJobs;