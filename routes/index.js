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
/*----------------------------BACKEND */
//Pagina de contato do cliente
router.get('/backend',(req,res)=>{
    res.render('backend',{
        titulo:'Este texto deve ser renderizado',
        titulo2: 'Segundo titulo',
        titulo3:'terceiro titulo'
    });
});

/* Outra forma de fazer o BACKEND */

router.get('/back',(req,res)=>{
    let meusdado = [
        {
            id:1,
            title:'Artigo1',
            author:'Vinicius',
            body:'Corpo do texto do Vinicius'
        },
    
        {
            id:2,
            title:'Artigo2',
            author:'Vinicius H. G. C',
            body:'Testando o segundo item'
        },
    
        {
            id:3,
            title:'Artigo3',
            author:'Vinicius Correa ',
            body:'Testando o terceiro arquivo'
        }
    ];
    res.render('backend',{
        titulo:'Este texto deve ser renderizado',
        meuarray: meusdado
    });
});

module.exports = router;