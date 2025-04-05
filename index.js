var express = require ('express');
var app = express();
var port = 4000;
require('./db')
var sModel = require('./model/sample')
// middleware to add data to db
app.use(express.json());
// api to add data to db
app.post('/',(req,res)=>{
    try {
        sModel(req.body).save();
        res.send("data added")
    } catch (error) {
        res.send(error)
    }
    //api to send 
    
})

app.get('/',async(req,res)=>{
    try {
        var data = await sModel.find()
        res.send(data)
    } catch (error) {
      res.send(error)  
    }
})
app.delete('/:id',async(req,res)=>{
  try {
    console.log(req.params.id)
    await sModel.findByIdAndDelete(req.params.id);
    res.send("Data deleted")
  } catch (error) {
  } 
})
app.listen(port,()=>{
    console.log(`server is up and runing in ${port}`)
})