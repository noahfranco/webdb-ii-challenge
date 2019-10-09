const express = require("express"); 
const knex = require("knex"); 


// What this doing????
const Knexfile = require("./knexfile.js"); 
// What is this doing???


// What is this doing???
const db = knex(Knexfile.development); 
// What is this doing???


const router = express.Router()

router.get("/", (req, res) => {
    
});

router.post("/", (req, res) => {
    
});

router.get("/:id", (req, res) => {
    
});

router.put("/:id", (req, res) => {
    
}); 

router.delete("/:id", (req, res) => {

})



module.exports = router; 


