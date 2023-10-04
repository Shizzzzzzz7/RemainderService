const { NotificationTicket } = require("../models/index");
const {Op} = require("sequelize");

class TicketRepository {

    async getAll(){
        try {
            const tickets = await NotificationTicket.getAll();
            return tickets;
        } catch (error) {
            console.log("Repo Error");
            throw {error};
        }
    }

    async create(data){
        try {
            const ticket = await NotificationTicket.create(data);
            return ticket;
        } catch (error) {
            console.log("Repo Error");
            throw {error};
        }
    }

    async get(){
        try {
            const tickets = await NotificationTicket.findAll({
                where:{
                    status: "PENDING",
                    notificationTime:{
                        [Op.lte]:new Date()
                    }
                }
            });
            return tickets;
        } catch (error) {
            throw {error};
        }
    }

    async update(ticketId, data){
        try {
            const ticket = await NotificationTicket.findByPk(ticketId);
            if(ticket){
                ticket.status = data.status;
                await ticket.save();
                return true;
            }
            throw {error:"Didn't got the ticket"};
        } catch (error) {
            throw {error};
        }
    }
}

module.exports = TicketRepository; 