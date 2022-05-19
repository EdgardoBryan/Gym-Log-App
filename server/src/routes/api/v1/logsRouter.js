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

logsRouter.post("/", async (req, res) => {
    const body = req.body
    try {
      const newLog = await Log.query().insertAndFetch(body)
      res.status(201).json({ newLog: newLog })
    } catch (error) {
      {
        res.status(422).json({ errors: error.data })
      }
      res.status(500).json({ errors: error })
    }
  })
  


export default logsRouter