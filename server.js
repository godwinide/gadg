const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const cors = require("cors");

// Dotenv
require('dotenv').config();
// mongodb
require("./config/db")

app.use(express.static("./client/build"))

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));
// file upload
app.use(fileUpload());


// API ROUTES
require("./routes")(app);

const PORT = process.env.PORT;
app.listen(PORT, console.log(`server started on port ${PORT}`));

