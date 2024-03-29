const { Pool } = require('pg');

require('dotenv').config();

const localConfig = {
    host: process.env.PSQL_HOST,
    user: process.env.PSQL_USER,
    password: process.env.PSQL_PASS,
    port: process.env.PSQL_PORT,
    database: process.env.PSQL_DB,
  };


class Database{
    constructor(config){
        this.connection = new Pool(config);
    }
    getConnection(){
        return this.connection;
    }
}
  
module.exports = new Database(localConfig).getConnection();