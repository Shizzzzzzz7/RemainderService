const TicketService = require("../service/email-service");

const create = async(req,res)=>{
    try {
        const response = await TicketService.createNotification(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully Registered an Email Remainder",
            err: {}
        });
    } catch (error) {
        return res.status(201).json({
            data: {},
            success: false,
            message: "Unable Register an Email Remainder",
            err: error
        });
    }
}

module.exports = {
    create
}