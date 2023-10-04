const cron = require("node-cron");

const emailService = require("../service/email-service");

const setupJobs = ()=>{
    cron.schedule('*/1 * * * *', async()=>{
        console.log("Running Task every 5 Mins");
        const response = await emailService.fetchPendingMails();
        response.forEach((email)=>{
            emailService.mailSender(
                "RemainderService@airline.com",
                email.recepientEmail,
                email.subject,
                email.content
            );
        });
        console.log(response); 
    });
}

module.exports = setupJobs;