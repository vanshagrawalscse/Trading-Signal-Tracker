const express = require("express");

const router = express.Router();
console.log("Signal routes loaded");

const {
    createSignal,
    getSignals,
    getSignal,
    updateSignal,
    deleteSignal
} = require("../controllers/signalController");


// CREATE
router.post("/", createSignal);


// GET ALL
router.get("/", getSignals);


// GET ONE
router.get("/:id", getSignal);



// UPDATE
router.put("/:id", updateSignal);


// DELETE
router.delete("/:id", deleteSignal);


module.exports = router;