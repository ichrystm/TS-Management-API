import Sequelize from 'sequelize'
import { connection } from '../database/database'
import { Budget } from './Budget'
import { Customer } from './Customer'
import { Order } from './Order'

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
    customer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Customer,
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
    order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Order,
            key: 'id'
        }
    }
})

//Vehicle.sync({force: true})