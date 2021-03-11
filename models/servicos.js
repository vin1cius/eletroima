const mongoose = require('mongoose');

//Schemas
let cards_collection = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId
      },
    titulo:{
        type: String,
        required: true
    },
    flag:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    imagem:{
        type: String,
        required: true
    }
});

let Servico = module.exports = mongoose.model('cards_collection', cards_collection,'cards_collection');