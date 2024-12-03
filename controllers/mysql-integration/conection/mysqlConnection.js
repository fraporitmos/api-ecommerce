const mysql = require('mysql2')
const {mysql_database} = require('./keys')
const connection  = mysql.createPool(mysql_database)
const {promisify} = require("util")

connection.getConnection((err, conn)=>{
    if(err){
        console.log(`Base de datos no conectada ${err}`)
    }else{
        if(conn) conn.release()
        console.log(`✅ Base de datos conectada con éxito.`)
        return
    }
})

connection.query = promisify(connection.query)
module.exports = connection