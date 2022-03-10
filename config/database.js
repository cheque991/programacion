import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const database = new Sequelize({

host: process.env.DB_HOST,
database: process.env.DBNAME,
username: process.env.DB_USER,
password: process.env.DB_PASS,
dialect: 'mssql',
timezone: '-05:00',
port: process.env.DB_PORT,
logging: false,
pool: {
    max: 5,
    min: 5,
    acquire: 60000,
    idle: 15000
},

});

export class Database {
    async connection () {
    try{
        await database.authenticate();
        return { ok: true, message: 'Connection to the database established correctly'}
    } catch (e) {
        return { ok: false, message: 'Could not connect to the database. Please check the following: ' + e }
    }
    }
}