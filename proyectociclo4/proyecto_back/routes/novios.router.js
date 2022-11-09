const express = require("express")
const router = express.Router()
const noviossController = require("../controllers/novios.controller")


router.post("/", noviossController.create)
router.get("/", noviossController.find)
router.get("/:id", noviossController.findOne)
router.put("/:id", noviossController.update)
router.delete("/:id", noviossController.remove)
module.exports = router 