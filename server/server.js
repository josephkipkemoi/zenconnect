const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

app.get("/api/data", (req, res) => {
    res.json({
        message: "Greetings from express"
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})