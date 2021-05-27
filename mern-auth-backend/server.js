const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const favicon = require("serve-favicon");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users", require("./routes/auth"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
	// Set Static Folder
	app.use(express.static("mern-auth/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "mern-auth", "build", "index.html"));
	});
}

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
