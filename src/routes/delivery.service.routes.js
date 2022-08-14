const express = require("express");
const router = express.Router();

const { saveDeliveryService } = require("../api/delivery.service.api");

/**
 * @Method {POST}
 * @Route api/DeliveryService/
 * @Description Save DeliveryService By Admin
 */
router.post("/", saveDeliveryService);

module.exports = router;
