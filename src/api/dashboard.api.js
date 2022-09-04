const Messages = require("../models/message.model");
const logger = require("../utils/logger");
const deleveryService = require("../models/delivery.service.model");
const User = require("../models/user.model");

/**
 * Dashboard Service Service
 * @param {}
 * @service save and update Delivery Service
 * @returns {Promise<dashboardDTO>}
 */

const getAdminDashBoarddData = async (request, response) => {
	try {
		let totalUsersCount = await User.find({ isActive: true }).count();
		let totalMessagesCount = await Messages.find({ isActive: true }).count();
		let deliveryServicesCount = await deleveryService.find({ isActive: true }).count();

		let clientMessages = await Messages.find().exec();

		response.json({
			totalUsersCount: totalUsersCount,
			totalMessagesCount: totalMessagesCount,
			deliveryServicesCount: deliveryServicesCount,
			clientMessages: clientMessages,
		});
	} catch (error) {
		logger.error(error);
	}
};

module.exports = { getAdminDashBoarddData };
