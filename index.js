const express = require("express")
const app = express()
const main_endpoint = "/api"
//Routes
const categoryRoutes = require("./routes/CategoryRoutes")
const productRoutes = require("./routes/ProductRoutes")
const cartRoutes = require("./routes/CartRoutes")
const userRoutes = require("./routes/UserRoutes")

const port = 4043

const cors = require("cors")
const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", 'PATCH', "DELETE"],
    allowHeaders: ["Content-Type", "Authorization"]
}

app.use(cors(corsOptions))
app.use(express.json())

app.use(main_endpoint, categoryRoutes)
app.use(main_endpoint, productRoutes)
app.use(main_endpoint, cartRoutes)
app.use(main_endpoint, userRoutes)


app.listen(port, ()=>{
    console.log("✅ Api jecutando en",port)
})



