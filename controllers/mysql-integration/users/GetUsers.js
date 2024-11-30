const myslConection = require("../conection/mysqlConnection")

const getUsers = async (req, res) => {
    try {
        const result = await myslConection.query("SELECT * FROM users")
        console.log(result)

    } catch (error) {
        
    }
}

module.exports = {getUsers}