const Sequelize = require('sequelize');

const sequelize = new Sequelize('kayo', 'root', '12345678', {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("deu bom no banco");
}).catch(function(){
    console.log("não deu bom no banco");
});

module.exports = sequelize;