import express from "express";
import Controller from "../Controller/orderController.js"
const route = express.Router()
route.use(express.json())
route.patch('/updateStatus',(req,res)=>Controller.updateStatus(req,res))  //Task 12
route.patch('/updateStatusByAmount',(req,res)=>Controller.updateStatusByAmount(req,res))  //Task 19
export default route