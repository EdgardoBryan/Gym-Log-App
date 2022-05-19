import Express from "express"
import Log  from "../../../models/Log.js"

const logsRouter = new Express.Router()

logsRouter.get("/" ,async (req,res)=>{
    try{
        const logs = await Log.query()
        res.status(200).json({ logs:logs }) 
    }catch(error){
        res.status(500).json( { error })
    }
})


export default logsRouter