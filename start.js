//Apenas inicia o servidor
const app = require('./app');
const mongoose = require('mongoose');
require('dotenv/config')

//Conectando ao banco de dados

//opções de conexão
//https://dev.to/dalalrohit/how-to-connect-to-mongodb-atlas-using-node-js-k9i
const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose.connect(process.env.DB_CONNECTION,connectionParams)
    .then( () => {
        console.log('Conectado ao banco de dados! ')
    })
    .catch( (err) => {
        console.error(`Erro na conexão!!!. \n${err}`);
    })

const server = app.listen(3000,() => {
    console.log(`Express is running on port ${server.address().port}`);
});