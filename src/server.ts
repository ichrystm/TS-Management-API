import { app } from './app'

import { router } from './routes/routes'

app.use(router)

app.listen(3000, () => {
    console.log('App online.')
})