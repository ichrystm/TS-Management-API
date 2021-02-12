import { Sequelize } from 'sequelize'

export const connection = new Sequelize('management', 'root', 'Root2021', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
})
