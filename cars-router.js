const express = require("express");

// What is this doing below ???
const knex = require("knex"); 

const knexConfig = require("./knexfile.js");

const db = knex(knexConfig.development)
// What is this doing above??? 

const router = express.Router()

router.get("/", (req, res) => {
    db.select("*")
    .from("cars")
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: "Something Went Wrong"})
    })
});

router.post("/", (req, res) => {
    const body = req.body 

    // db.select("*")
    // .from("cars")
    db("cars")
    .insert(body)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: "Something Went Wrong"})
    })
});

module.exports = router; 


