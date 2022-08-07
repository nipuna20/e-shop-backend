//load modules
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const startupDebugger = require("debug")("app:startup");
//Create the Express App
const app = express();

//Setup Request body JSON Parsing
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//Enable All CORS Requests
app.use(cors());

app.use(helmet());

//"mongodb://localhost:27017/SPM"
const connectionString = process.env.connectionstring;

mongoose.connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
	console.log("Connect Database");
});

if (app.get("env") === "development") {
	app.use(morgan("tiny"));
	startupDebugger("Enabled Morgon......");
}

app.get("/", (request, response) => {
	response.send("<h3>Welcome API Documentation</h3>");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`Web API Development: ${port}`);
});
