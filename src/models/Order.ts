import Sequelize from 'sequelize'
import { connection } from '../database/database'
import { Budget } from './Budget'
import { Customer } from './Customer'
import { Vehicle } from './Vehicle'

export const Order = connection.define("order", {
    number: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    aditional_details: {
        type: Sequelize.STRING,
        allowNull: true
    },
    customer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Customer,
            key: 'id'
        }
    },
    vehicle_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Vehicle,
            key: 'id'
        }
    },
    budget_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Budget,
            key: 'id'
        }
    },
})

//Order.sync({force: true})