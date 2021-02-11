import Sequelize from 'sequelize'
import { connection } from '../database/database'

export const Vehicle = connection.define("vehicle", {
    manufacturer: {
        type: Sequelize.STRING,
        allowNull: false
    },
    model: {
        type: Sequelize.STRING,
        allowNull: false
    },
    plate: {
        type: Sequelize.STRING,
        allowNull: false
    },
    color: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    insurance: {
        type: Sequelize.STRING,
        allowNull: true,
    },
})