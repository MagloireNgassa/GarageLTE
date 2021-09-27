const express = require('express');                     
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/',function(req,res){
    res.render('index');
});

app.get('/pneu',function(req,res){
    res.render('pneu');
});

app.get('/assistance',function(req,res){
    res.render('assistance');
});

app.get('/systeme',function(req,res){
    res.render('systeme');
});

app.get('/changementHuile',function(req,res){
    res.render('changementHuile');
});

app.listen(3019, function(){
    console.log("j'ecoute le port 3019");
}); 