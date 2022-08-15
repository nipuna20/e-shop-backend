const express = require("express");
const router = express.Router();

const {
	saveDeliveryService,
	deleteDeliveryService,
	getAllDeliveryServices,
	controlDeliveryServiceActivities,
	getDeliveryServiceMasterData,
} = require("../api/delivery.service.api");

/**
 * @Method {POST}
 * @Route api/DeliveryService/
 * @Description Save and update DeliveryService By Admin
 */
router.post("/", saveDeliveryService);

/**
 * @Method {DELETE}
 * @Route api/DeliveryService/
 * @Description Delete DeliveryService By Admin
 */
router.delete("/", deleteDeliveryService);

/**
 * @Method {GET}
 * @Route api/DeliveryService/
 * @Description Get All And Filter DeliveryServices By Admin
 */
router.get("/", getAllDeliveryServices);

/**
 * @Method {PUT}
 * @Route api/DeliveryService/
 * @Description control DeliveryServices By Admin
 */
router.put("/", controlDeliveryServiceActivities);

/**
 * @Method {GET}
 * @Route api/DeliveryService/masterData
 * @Description Get DeliveryServices MasterData By Admin
 */
router.get("/masterData", getDeliveryServiceMasterData);

module.exports = router;
