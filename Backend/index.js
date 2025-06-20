const express = require("express")
const { default: mongoose } = require("mongoose")
const { MONGOURL } = require("./key")

const app = express()


app.use(express.json())

app.get("/", (res, req) => {
    res.send("this is get req")
})


mongoose.connect(MONGOURL)
    .then(() => console.log("Database connected successfully"))

app.use(require("./controllers/auth"))


app.listen(3000, () => {
    console.log("Serve is running on port http://localhost:3000");
})