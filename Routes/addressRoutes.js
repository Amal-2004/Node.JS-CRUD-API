import  express  from "express";
import Controller from "../Controller/addressController.js"
const route =express.Router()
route.use(express.json())
route.patch('/updateCity',(req,res)=>
Controller.updateCity(req,res))

export default route
