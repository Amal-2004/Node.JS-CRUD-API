import express from "express";
import Controller from "../Controller/movieController.js"
const route = express.Router()
route.use(express.json())
route.patch('/removeDescription',(req,res)=>Controller.removeDescription(req,res))  //Task 13
export default route