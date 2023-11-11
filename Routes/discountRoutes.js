import express from "express";
import Controller from "../Controller/discountController.js"
const route = express.Router()
route.use(express.json())
route.patch('/discountByPrice',(req,res)=>Controller.discount(req,res))  //Task 21
export default route