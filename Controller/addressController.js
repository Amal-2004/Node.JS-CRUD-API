import addressModel from "../Models/addressModel.js"
async function updateCity(req,res){
    try{
        const id=req.body.id
        const city =req.body.city
        console.log('The id id and city',id,city);
        const result =await addressModel.findByIdAndUpdate(id,{$set:
        {"Address.city":city}})
       
        if(!result){
            return res.status(404).send('id not Found')

        }
        return res.send('Success update')
    }
    catch{
            return res.status(500).send('Cant Update City')
        }
}
export default{
    updateCity
}

