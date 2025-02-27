const express = require("express")
const router = express.Router()
const {check} = require('express-validator');

router.post("/register", [
    check("phone_number", "Please enter a valid phone number")
],async(req,res) => {
    const { full_name, user_name, phone_number, email, password, confirm_password, gender } = req.query
})

module.exports = router