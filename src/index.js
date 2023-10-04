const bodyParser = require("body-parser");
const express = require("express");

const app= express();

const { PORT } = require("./config/serverConfig");

const mailSender = require("./service/email-service");

const TicketController = require("./controller/ticket-controller");
const setupJobs = require("./utils/jobs");

const setupAndStartServer = ()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.post("/api/v1/tickets", TicketController.create);

    app.listen(PORT , ()=>{
        console.log(`Server Running on PORT: ${PORT}`);
        setupJobs();
    });
}

setupAndStartServer();