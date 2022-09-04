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
		let totalUsersCount = await User.countDocuments();
		let totalMessagesCount = await Messages.countDocuments();
		let deliveryServiceCount = await deleveryService.countDocuments();

		let messages = await Messages.find().exec();

		response.json({
			data: {
				totalUsersCount: totalUsersCount,
				totalMessagesCount: totalMessagesCount,
				deliveryServiceCount: deliveryServiceCount,
				messages: messages,
			},
		});
	} catch (error) {
		logger.error(error);
	}
};

module.exports = { getAdminDashBoarddData };
