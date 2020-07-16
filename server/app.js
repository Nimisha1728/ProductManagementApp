const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('./src/model/user');
const jwt = require('jsonwebtoken')
const cors = require('cors');
var bodyparser = require('body-parser');
const productdata = require('./src/model/productdata');

const api = require('./src/routes/api');


var app = new express;


app.use(cors());
app.use(bodyparser.json())
app.use('/api',api)
app.get('/products',function(req,res){
    res.header("Access-Control-Allow-Origin","http://localhost:4200")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    productdata.find()
                 .then(function(products){
                     res.send(products);
                 });
});



app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);
    var product = {
        productId : req.body.product.productId,
        productName : req.body.product.productName,
        productCode : req.body.product.productCode,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        price : req.body.product.price,
        starRating : req.body.product.starRating,
        imageUrl : req.body.product.imageUrl
    }
    var product = new productdata(product);
    product.save();

});


app.post('/delete',function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    console.log(req.body);
    var id = req.body.id;
    
  
    productdata.deleteOne({ _id: id })
        
        .then(function(products) {
            console.log(products);
            res.send(products);
        });

});

app.get('/edit/:id',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    const id = req.params.id;
    productdata.findOne({_id: id })
    .then(function(product){
        res.send(product);
    });
});

 app.post('/update',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    var product = {
        _id : req.body.product._id,
        productId : req.body.product.productId,
        productName : req.body.product.productName,
        productCode : req.body.product.productCode,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        price : req.body.product.price,
        starRating : req.body.product.starRating,
        imageUrl : req.body.product.imageUrl
    }

    productdata.findOne({ _id: product._id})
    .then(function(result){
        if(!result){
            return next(new Error('updation failed'));

        }
        else{
            var productupdate =new productdata(product);
            console.log("updated"+result)
            console.log("updated"+productupdate)
            productdata.findByIdAndUpdate(productupdate._id, productupdate, (er, updated) => {
                console.log("updated"+updated);
            })
        }
    })
 })   
   
   

app.listen(3000,function(){
    console.log('listening to port 3000');
});