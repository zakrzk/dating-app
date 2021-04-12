import Sequelize from 'sequelize';
import {sequelize} from "../util/database.js";

export const Hobby = sequelize.define('hobby', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
    },
    value: {
        type: Sequelize.STRING,
        allowNull: false
    },
});