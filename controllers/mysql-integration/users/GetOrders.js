const myslConection = require("../conection/mysqlConnection")

const getOrders = async (req, res) => {
    try {
        const result = await myslConection.query("SELECT  ODRS.products from ordenes ODRS")
        if(result.length > 0){
            res.status(200).json({
                result
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

module.exports = {getOrders}