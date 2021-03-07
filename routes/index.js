//Aqui serão configuradas as rotas
const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('It works');
});

router.get('/almofa',(req,res)=>{
    res.send('Almofadinhas');
});

//Testando pagina com carrosel feito com o pug
router.get('/form',(req,res)=>{
    res.render('mylayout');
});

//Pagina home
router.get('/home',(req,res)=>{
    res.render('home');
});

module.exports = router;