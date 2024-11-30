const express = require("express")
const app = express()
const main_endpoint = "/api"
//Routes
const categoryRoutes = require("./routes/CategoryRoutes")
const productRoutes = require("./routes/ProductRoutes")
const cartRoutes = require("./routes/CartRoutes")
const userRoutes = require("./routes/UserRoutes")

const port = 4043

app.use(express.json())
app.use(main_endpoint, categoryRoutes)
app.use(main_endpoint, productRoutes)
app.use(main_endpoint, cartRoutes)
app.use(main_endpoint, userRoutes)


app.listen(port, ()=>{
    console.log("ejecutando en",port)
})



