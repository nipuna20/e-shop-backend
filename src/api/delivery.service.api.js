const DeliveryService = require("../models/delivery.service.model");

/**
 * @todo create @function GetById,MasterData,DeliveryServiceListIncudingFilters
 */

/**
 * Delivery Service Service
 * @param {DeliveryServiceDTO}
 * @service save and update Delivery Service
 * @returns {Promise<responseDTO>}
 */
const saveDeliveryService = async (request, response) => {
	try {
		let { id, name, email, telephoneNumber, address } = request.body;

		if (id === null) {
			let deliveryService = new DeliveryService({
				name,
				email,
				telephoneNumber,
				address,
				createdOn: new Date.now(),
				createdBy,
				updatedOn: new Date.now(),
				updatedBy,
			});

			await deliveryService.save();

			response.json({
				isSuccess: true,
				message: "Delivery Service has been save successfully",
			});
		} else {
			const availableDeliveryService = await DeliveryService.findById(id);

			if (availableDeliveryService === null) {
				response.json({
					isSuccess: false,
					message: "Not Found Delivery Service Please try Again",
				});
			}

			const deliveryServiceObj = await DeliveryService.findByIdAndUpdate(id, {
				id,
				name,
				email,
				telephoneNumber,
				address,
				updatedOn: new Date.now(),
			});

			response.json({
				isSuccess: true,
				message: "Delivery Service has been updated successfully",
			});
		}
	} catch (error) {
		response.json({
			isSuccess: false,
			message: "Error has been occred please try again",
		});
	}
};

module.exports = {
	saveDeliveryService,
};
