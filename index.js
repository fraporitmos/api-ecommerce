const express = require("express")
const app = express()
const main_endpoint = "/api"
//Routes
const categoryRoutes = require("./routes/CategoryRoutes")
const productRoutes = require("./routes/ProductRoutes")

const port = 4043

app.use(express.json())
app.use(main_endpoint, userRoutes)
app.use(main_endpoint, categoryRoutes)
app.use(main_endpoint, productRoutes)

app.listen(port, ()=>{
    console.log("ejecutando en",port)
})



