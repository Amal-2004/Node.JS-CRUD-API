import express from "express"
import Controller from "../Controller/bookController.js"
const route =express.Router()
route.use(express.json())
route.get('/category',(req,res)=>Controller.category(req,res))
route.get('/year',(req,res)=>Controller.year(req,res))
route.get('yearAndcategory',(req,res)=>Controller.yearAndcategory(req,res))
route.get('sort',(req,res)=>Controller.sort(req,res))
export default route