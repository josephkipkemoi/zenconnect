const express = require("express")
const router = express.Router()
const auth = require("../../middleware/auth")
const {check} = require('express-validator');

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyACB2m7AmnfW0PpkqXqPfBn0pjj3pQ0nwUa");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

router.get("/",[
    check("message", "Please enter a message")
], async(req, res) => {
    const { message } = req.body
    const result = await model.generateContent(message);

    res.json({
        message: result.response.text()
    })  
})

module.exports = router