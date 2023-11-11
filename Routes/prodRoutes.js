import express from "express";
import Controller from "../Controller/prodController.js"
const route = express.Router()
route.use(express.json())
route.get('/price',(req,res)=>Controller.price(req,res))  //Task 4
route.get('/color',(req,res)=>Contoller.color(req,res))  //Task 5
route.get('/rating',(req,res)=>Controller.rating(req,res))  //Task 6
route.get('/categoryAndPrice',(req,res)=>Controller.categoryAndPrice(req,res))  //Task 7
route.get('/date',(req,res)=>Controller.date(req,res))  //Task 8
route.get('/sort',(req,res)=>Controller.sort(req,res))  //Task 10
route.get('/highPrice',(req,res)=>Controller.highPrice(req,res))  //Task 11
route.patch('/quantity',(req,res)=>Controller.quantity(req,res))  //Task 14

export default route