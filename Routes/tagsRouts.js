import express from "express";
import Controller from "../Controller/tagsController.js"
const route = express.Router()
route.use(express.json())
route.patch('/newTag',(req,res)=>Controller.newTag(req,res))  //Task 15
route.patch('/removeTag',(req,res)=>Controller.removeTag(req,res))  //Task 16
route.patch('/newDistinctTag',(req,res)=>Controller.newDistinctTag(req,res))  //Task 17
route.patch('/removeAllSameTag',(req,res)=>Controller.removeAllSameTag(req,res))  //Task 18

export default route