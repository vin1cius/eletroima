//Aqui serão configuradas as rotas
const express = require('express');
const router = express.Router();

router.get('/teste',(req,res)=>{
    res.send('It works');
});

//Testando pagina com carrosel feito com o pug
router.get('/mylayout',(req,res)=>{
    res.render('mylayout');
});

//Pagina home(parte 1)
router.get('/',(req,res)=>{
    res.render('home');
});

//Pagina home(parte 2)
router.get('/home',(req,res)=>{
    res.render('home');
});

//Pagina Sobre(about)
router.get('/about',(req,res)=>{
    res.render('about');
});

//Pagina de planos oferecidos)
router.get('/plans',(req,res)=>{
    res.render('plans');
});

//Pagina de contato do cliente
router.get('/contact',(req,res)=>{
    res.render('contact');
});

module.exports = router;