const express = require('express');
const path = require('path'); 
const routes = require('./routes/index');

const app = express();
app.set('views',path.join(__dirname,'views')); //Faz o link para as views onde serão criadas páginas em pug
app.set('view engine','pug'); //Ativa o pug
app.use('/',routes);//Redireciona o acesso para o arquivo de rotas?
app.use(express.static('node_modules'));//Necessário para pegar os estilos do bootstrap.min.css
app.use(express.static('public'));// Necessário para renderizar as imagens e arquivos estáticos da pasta public 
module.exports = app;
