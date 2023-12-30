const bodyParser = require("body-parser");
const express = require("express");
const { createChannel, subscribeMessage } = require("./utils/messageQueue");
const { REMAINDER_BINDING_KEY } = require("./config/serverConfig");
const EmailService = require("./service/email-service");

const app= express();

const { PORT } = require("./config/serverConfig");

const mailSender = require("./service/email-service");

const TicketController = require("./controller/ticket-controller");
const setupJobs = require("./utils/jobs");

const setupAndStartServer = async()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.post("/api/v1/tickets", TicketController.create);

    const channel = await createChannel();

    app.listen(PORT , ()=>{
        console.log(`Server Running on PORT: ${PORT}`);
        subscribeMessage(channel, EmailService.subscribeEvents , REMAINDER_BINDING_KEY);
        // setupJobs();
    });
}

setupAndStartServer();