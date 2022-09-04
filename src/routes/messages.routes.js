const express = require("express");
const router = express.Router();

const { saveMessage } = require("../api/message.api");

/**
 * @Method {POST}
 * @Route api/message/
 * @Description Save message by customer
 */
router.post("/", saveMessage);

module.exports = router;
