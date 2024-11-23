const express = require("express")
const app = express()
const main_endpoint = "/api"
//Routes
const helloRoutes = require('./routes/HelloRoutes')
const userRoutes = require("./routes/UserRoutes")

const port = 4043

app.use(express.json())
app.use(main_endpoint, helloRoutes)
app.use(main_endpoint, userRoutes)


app.listen(port, ()=>{
    console.log("ejecutando en",port)
})



