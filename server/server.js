const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000
const ConnectDb = require("../server/db/connect")

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyACB2m7AmnfW0PpkqXqPfBn0pjj3pQ0nwUa");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Database connection
ConnectDb()

app.use(cors())

app.get("/api/chatbot", async(req, res) => {
    const { message } = req.query
    const result = await model.generateContent(message);

    res.json({
        message: result.response.text()
    })
})

app.post("/api/register", async(req,res) => {
    const { full_name, user_name, phone_number, email, password, confirm_password, gender } = req.query
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})