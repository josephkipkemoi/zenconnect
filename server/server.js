const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyACB2m7AmnfW0PpkqXqPfBn0pjj3pQ0nwU");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


app.use(cors())

app.get("/api/chatbot", async(req, res) => {
    const { message } = req.query
    const result = await model.generateContent(message);

    res.json({
        message: result.response.text()
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})