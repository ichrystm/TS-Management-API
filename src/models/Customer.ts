import Sequelize from 'sequelize'
import { connection } from '../database/database'
import { Vehicle } from './Vehicle'

export const Customer = connection.define("customer", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.INTEGER(),
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: true
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
    },
})

//Customer.sync({force: true})





