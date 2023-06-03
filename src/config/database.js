import mysql from 'mysql2';

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'bubble',
    password: 'Super',
    database: 'bubble'
});

export default db;