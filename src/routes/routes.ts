import { Router } from 'express'
import HomeController from '../controllers/HomeController'
import CustomerController from '../controllers/CustomerController'

const router = Router()

router.get('/', HomeController.index)

router.post('/customer', CustomerController.create)

export { router }