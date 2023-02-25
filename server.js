const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Dashboard Pro er Matha Noshto Server");
});

app.listen(port, () => {
    console.log("Server is running successfully : ", port);
})