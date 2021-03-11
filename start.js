//Habilita o schema de serviços
let Servicos = require('./models/servicos');

//Inicia o App na porta 3000
const app = require('./app');
const server = app.listen(3000,() => {
    console.log(`Express is running on port ${server.address().port}`);
});

