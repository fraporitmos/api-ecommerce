export const helloActions = (req, res)=>{
    try{
        res.status(200).json({
            estado: "Servidor ejecutado correctamente."
        })
    } catch(e){
        console.log(e)
    }
}