import bookModel from '../Models/bookModel.js'
async function category(req,res){
try{
    let category=req.query.category
    const result=await bookModel.find({category})
    if(result.length==0){
        return res.status(404).send('No Books Found ') 

    }
res.send(result)
}
catch{
    return res.status(500).status(500).send('Can Not Get Books')

}
}
async function year(req,res){
    try{
        let year=req.query.year
        const result=await bookModel.find({year:{$gt:year}})
        if(result.length==0){
            return res.status(404).send('No Books Found ${year}') 
    
        }
    res.send(result)
    }
    catch{
        return res.status(500).status(500).send('Can Not Get Books')
    
    }
    }

async function yearAndcategory(req,res){
    try{
        let year=req.query.year
        let category=req.year.category
        const result=await bookModel.find({category,"year":{$gt:year}}).limit(3).sort({"title":1})
        if(result.length==0){
            return res.status(404).send('No Books Found ${year} in this catagory ${category}') 
    
        }
    res.send(result)
    }
    catch{
        return res.status(500).status(500).send('Can Not Get Books')
    
    }
    }

    async function sort(req,res){
        try{
            
            const result=await bookModel.find({}).sort({"author":1}).sort({year:-1})
            if(result.length==0){
                return res.status(404).send('No Books Found ') 
        
            }
        res.send(result)
        }
        catch{
            return res.status(500).status(500).send('Can Not Get Books')
        
        }
        }
export default{
    category,
    year,
    yearAndcategory,
    sort
}