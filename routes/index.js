//Aqui serão configuradas as rotas
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('dotenv/config')

//Conectando ao banco de dados

//opções de conexão
//https://dev.to/dalalrohit/how-to-connect-to-mongodb-atlas-using-node-js-k9i

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    dbName: 'eletroima_db'
}


//efetuando e testando conexão 
mongoose.connect(process.env.DB_CONNECTION,connectionParams)
    .then( () => {
        console.log('Conectado ao banco de dados! ')
    })
    .catch( (err) => {
        console.error(`Erro na conexão!!!. \n${err}`);
    })

let db = mongoose.connection;

//Verificando erros no banco de dados
db.on('error',function(err){
    console.log(err);
});

//Pagina home
router.get('/',(req,res)=>{
    res.render('home');
});
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
let Servivao = require('../models/servicos')
router.get('/listardados',async (req,res)=>{
    Servivao.find({},function(err,servicoss){
        if(err){
            console.log(err);
        }else{
            //console.log(servicoss) exibe os dados recuperados do banco de dados
            res.render('backend',{
                titulo:'Este texto deve ser renderizado',
                meuarray: servicoss
            });
        }
    });
});

module.exports = router;