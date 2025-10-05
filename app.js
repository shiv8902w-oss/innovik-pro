const express = require('express')
const app = express()

app.set('view engine','ejs')

app.get('/',function(req,res){
    res.render('frontpage')
})

app.get('/views/dashboard',function(req,res){
    res.render('dashboard')
})  
app.get('/views/home',function(req,res){
    res.render('home')
})  
app.get('/views/adminhomepage',function(req,res){
    res.render('adminhomepage')
})  

app.get('/views/userhomepage',function(req,res){
    res.render('userhomepage')
})

app.get('/views/product',function(req,res){
    res.render('product')
})

app.get('/views/inventorymanagement',function(req,res){
    res.render('inventorymanagement')
})

app.get('/views/costumermanger',function(req,res){
    res.render('costumermanger')
})

app.get('/views/analyticaldashboard',function(req,res){
    res.render('analyticaldashboard')
})

app.get('/views/governmentschems',function(req,res){
    res.render('governmentschems')
})

app.get('/views/settings',function(req,res){
    res.render('settings')
})

app.get('/views/loginuser',function(req,res){
    res.render('loginuser')
})
app.get('/views/loginadmin',function(req,res){
    res.render('loginadmin')
})

app.get('/views/sighup',function(req,res){
    res.render('sighup')
})

app.get('/views/billingpage',function(req,res){
    res.render('billingpage')
})

app.get('/views/cloths',function(req,res){
    res.render('cloths')
})

app.get('/views/cloth',function(req,res){
    res.render('cloth')
})

app.get('/views/upload',function(req,res){
    res.render('upload')
})

app.get('/views/jewelry',function(req,res){
    res.render('jewelry')
})


app.listen(3000)