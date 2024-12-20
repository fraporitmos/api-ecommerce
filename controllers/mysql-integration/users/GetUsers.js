const myslConection = require("../conection/mysqlConnection")

const getUsers = async (req, res) => {

    try {
        const result = await myslConection.query("SELECT * FROM users")
        if(result.length > 0){
            res.status(200).json({
                msg: "success",
                users: result
            });
        }else{
            res.status(200).json({
                msg: "No existen usuarios.",
                users: []
            });
        }

    } catch (error) {
        res.status(500).json({
            "msg": `Error: ${error}`,
        });
    }
}

module.exports = {getUsers}