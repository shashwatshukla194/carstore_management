const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "com@1234",
    host: "localhost",
    port: 5432,
    database: "carstore-management"
});


module.exports = pool;