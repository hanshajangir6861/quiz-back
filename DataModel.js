import mongoose from "mongoose";

const Schema = mongoose.Schema({
    question:String,
    answer:String,
    option1:String,
    option2:String,
    option3:String,
    option4:String,

})
    
  const DataModal = mongoose.model("datas" , Schema)  

export default DataModal