const express = require('express');
require('./config');
const product = require('./product');
const app = express();


app.use(express.json());


app.post('/create',async(req,res)=>{
    let data = new product(req.body);
    let result = await data.save();
    console.log(result);
    res.send(result);
})


app.get('/list',async(req,res)=>{
    let data = await product.find();
    
    console.log(data);
    res.send(data);
})

app.delete('/delete/:_id',async(req,res)=>{
    console.log(req.params);
    let data = await product.deleteOne(req.params);
    res.send(data);
})

app.put('/update/:_id',async(req,res)=>{
    console.log(req.params);
    let data = await product.updateOne(
        req.params,
        {
            $set:req.body
        }
    );
    res.send(data);
})
app.listen(5000);