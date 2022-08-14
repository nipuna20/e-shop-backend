const mongoose = require("mongoose");
const { Schema } = mongoose;

const deliveryServiceSchema = new Schema({
	name: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
	},

	telephoneNumber: {
		type: String,
		required: true,
	},

	address: {
		type: String,
		required: true,
	},

	isDisabled: {
		type: Boolean,
		required: false,
		default: true,
	},

	createdOn: {
		type: Date,
		required: true,
	},

	createdBy: {
		type: Schema.Types.ObjectId,
		required: false,
		ref: "User",
	},

	updatedOn: {
		type: Date,
		required: true,
	},

	updatedBy: {
		type: Schema.Types.ObjectId,
		required: false,
		ref: "User",
	},
});

module.exports = mongoose.model("DeliveryService", deliveryServiceSchema);
