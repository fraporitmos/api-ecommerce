const myslConection = require("../conection/mysqlConnection")

const postUser = async (req, res) => {
    const {names,phone,email} = req.body

    try {
        const result = await myslConection.query(`INSERT INTO users (id, id_location, names, phone, email) VALUES (NULL, NULL, '${names}', '${phone}', '${email}');`)
        
        
        if(names !== undefined && phone !== undefined && email !== undefined){
            if(result.serverStatus == 2){
                res.status(200).json({
                    users: result
                });
            }
        }else{
              res.status(400).json({
                msg: "Error, revisa los datos.",
            });
        }
   
   

    } catch (error) {
          res.status(500).json({
            "msg": `Error: ${error}`,
        });
    }
}

module.exports = {postUser}