import express from "express";
import mongoose from "mongoose";

const password = encodeURIComponent("hansha6861")
const connect = mongoose.connect(`mongodb+srv://hanshajangir061:${password}@cluster0.4uhtwvy.mongodb.net/?retryWrites=true&w=majority`)


export default connect