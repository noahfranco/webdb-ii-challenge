const express = require("express"); 
const helmet =  require("helmet"); 

const carsRouter = require("./cars-router.js"); 

const server = express(); 

server.use(helmet()); 
server.use(express.json()); 

server.get("/", (req, res) => {
    res.send("Server Listening on Port 4000")
})

server.use("/api/cars", carsRouter)

module.exports = server; 