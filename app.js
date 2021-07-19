import express from "express";
import web from "./routes/web";

const app = express()
const port = 8000

// Web Routes
app.use('/', web)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
