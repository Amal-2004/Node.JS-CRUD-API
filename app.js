import express from "express"
import mongoose from "mongoose"

import bookRoutes from "./Routes/bookRoutes.js"
import addressRoutes from "./Routes/addressRoutes.js"
import prodRoutes from "./Routes/prodRoutes.js"
import orderRoutes from "./Routes/orderRoutes.js"
import movieRoutes from "./Routes/movieRoutes.js"
import tagRoutes from "./Routes/tagsRouts.js"
import discountRoutes from "./Routes/discountRoutes.js"

const app=express()
app.use('/address',addressRoutes)
app.use('/book',bookRoutes)
app.use('/prod',prodRoutes)
app.use('/order',orderRoutes)
app.use('/movie',movieRoutes)
app.use('/tag',tagRoutes)
app.use('/discount',discountRoutes)

await mongoose.connect('mongodb://127.0.0.1:27017/Book_db').then(()=>{
    app.listen(9000,()=>console.log('Server Running in port 9000'))
}).catch(err=>console.log(err.message))
app.all('/',(req,res)=>{
    res.send('Api Working')
})