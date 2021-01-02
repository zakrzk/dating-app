import * as Sequelize from 'sequelize'
import {sequelize} from "../util/database.js";

export const TestMessage = Sequelize.define('testMessage', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    message: {
        type: Sequelize.STRING,
        allowNull: true
    }
});