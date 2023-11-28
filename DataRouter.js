import express from 'express'
import DataModel from './DataModel.js'


const DataRouter = express.Router()

DataRouter.get("/ques" ,async(req,res)=>{
const result = await DataModel.find()
res.status(200).send(result)

})

DataRouter.post("/add", async(req,res)=>{
const DataToAdd = new DataModel(req.body) 
let result = await DataToAdd.save()
res.json(result)
})




export default DataRouter