// import express  from "express";


// const app = express()
// // const password = encodeURIComponent("hansha6861")
// const connection = mongoose.connect('mongodb+srv://hanshajangir061:hansha6861@cluster0.4uhtwvy.mongodb.net/?retryWrites=true&w=majority')

// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// // app.use(cors({origin:}))

// const port = 4040
//  connection.then(() => {
//     app.listen(port, () =>
//         console.log("Server started at port " + port))
// })


import express from 'express'
import mongoose from 'mongoose';
import cors from "cors";
import connect from './connection.js'
import DataRouter from './DataRouter.js';

const app = express()
app.use(cors({origin: "https://quiz-front-eb8l.onrender.com"}))
app.use(express.json())
app.use("/data" , DataRouter)

// app.use(express.urlencoded({ extended: false }))


connect.then(() => {
    app.listen(8000, () => {
        console.log('app is listen on 8000')
    })
})
