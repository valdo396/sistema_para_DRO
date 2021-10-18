const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
/*
console.log('host: '+ process.env.DB_HOST);
console.log('user: '+ process.env.DB_USER);
console.log('password: '+ process.env.DB_PASSWORD);*/
console.log('database: '+ process.env.DB_DATABASE);

connection.connect((error)=>{
    
    if(error){
        console.log('El error de conexion es: '+ error);
        return;
    }
    console.log('Conectado a la base de datos!!!');
});

module.exports = connection;//exportar el modulo de conexion para poder usarlo en cualquier otro archivo