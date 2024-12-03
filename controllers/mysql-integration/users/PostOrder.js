const myslConection = require("../conection/mysqlConnection")

const postOrder = async (req, res) => {
    const {id_user,jsonProducts,total} = req.body

    try {
        const result = await myslConection.query(`INSERT INTO ordenes (id, id_user, products, total, status, date) VALUES (NULL, '${id_user}', '${jsonProducts}', '${total}', 'pending', CURRENT_TIMESTAMP);`)
        
         if(result.serverStatus == 2){
            res.status(200).json({
              "msg": "Orden registrada."
            });
         }

    } catch (error) {
          res.status(500).json({
            "msg": `Error: ${error}`,
        });
    }
}

module.exports = {postOrder}
