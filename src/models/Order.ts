import Sequelize from 'sequelize'
import { connection } from '../database/database'

export const Customer = connection.define("cliente", {
    number: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    aditional_details: {
        type: Sequelize.STRING,
        allowNull: true
    },
})