const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('It works');
});

router.get('/almofa',(req,res)=>{
    res.send('Almofadinhas');
});



module.exports = router;