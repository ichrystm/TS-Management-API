import Sequelize from 'sequelize'
import { connection } from '../database/database'

export const Orcamento = connection.define("budget", {
    number: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    details: {
        type: Sequelize.STRING,
        allowNull: true
    },
    parts_price: {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    labor_price: {
        type: Sequelize.NUMBER,
        allowNull: true,
    },
    total_price: {
        type: Sequelize.NUMBER,
        allowNull: true,
    },
})