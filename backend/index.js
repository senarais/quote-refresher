import e from "express";
import cors from "cors"
import quotes from "./quotes.js";

const app = e();
app.use(cors())

const port = 4000;


app.get("/getquote" , (req, res) => {
    const randomNumber = Math.floor(Math.random() * quotes.length)
    const quote = quotes[randomNumber]

    res.json({quote})
})

app.listen(port, () => {
    console.log("server running port 4000")
})