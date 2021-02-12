import Sequelize, { Model } from 'sequelize'
import { connection } from '../database/database'
import { Customer } from './Customer'
import { Vehicle } from './Vehicle'

export const Budget = connection.define("budget", {
    number: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    details: {
        type: Sequelize.STRING,
        allowNull: true
    },
    parts_price: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    labor_price: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    total_price: {
        type: Sequelize.INTEGER,
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
    vehicle_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: Vehicle,
            key: 'id'
        }
    },
})

//Budget.sync({force: true})