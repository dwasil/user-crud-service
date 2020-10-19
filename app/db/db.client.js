
const { Client } = require('pg');

const dbClient = new Client({
    connectionString: process.env.DATABASE_URI // "postgresql://myuser:passwd@192.168.99.100:32143/myapp" //
});

dbClient.connect();

module.exports = dbClient;