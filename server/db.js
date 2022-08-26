const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME,      // name bd
    process.env.DB_USER,      // name db_user 
    process.env.DB_PASSWORD,  // password db_user 
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)