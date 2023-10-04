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
            
        }
    }
}

module.exports = TicketRepository; 