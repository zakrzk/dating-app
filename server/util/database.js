import * as mysql from "mysql2";
import * as Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
        dialect: 'mysql',
        host: 'database'
    });