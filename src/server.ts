import { app } from './app'
import { router } from './routes/routes'
import { connection } from './database/database'

app.use(router)

connection.authenticate()
.then(() => {
    console.log('Database connected')
})

app.listen(3000, () => {
    console.log('App online.')
})