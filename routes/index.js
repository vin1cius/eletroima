const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('It works');
});

router.get('/almofa',(req,res)=>{
    res.send('Almofadinhas');
});

//Testando formulario feito com o pug
router.get('/form',(req,res)=>{
    res.render('mylayout');
});

module.exports = router;