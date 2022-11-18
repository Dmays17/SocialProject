//Variables
const express=require('express')
const cors=require('cors')
require('dotenv').config()
const app=express()
const { Sequelize } = require('sequelize')
const PORT = process.env.PORT
// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)

try {
    sequelize.authenticate() 
    console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`) 
}

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


app.listen(PORT,()=>{
    console.log("Sever running on",PORT )
})


