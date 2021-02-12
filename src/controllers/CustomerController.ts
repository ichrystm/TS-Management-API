import { Request, Response } from 'express'
import { cpf } from 'cpf-cnpj-validator'

import { Customer } from '../models/Customer'
import { Budget } from '../models/Budget'
import { Order } from '../models/Order'
import { Vehicle } from '../models/Vehicle'

class CustomerController {

    async create(req: Request, res: Response) {

        const errors: string[] = []
        var customerName: string = ''
        var customerCpf: number = 0

        if(req.body.cpf == undefined || req.body.name == undefined){
            res.status(400)
            res.send({
                Error: "Parametros inválidos"
            })
            return
        }

        if(!cpf.isValid(req.body.cpf.toString())){
            const cpf_error = "CPF Inválido."
            errors.push(cpf_error)
        }else{
            customerCpf= req.body.cpf
        }

        if(req.body.name == undefined || req.body.name == null || req.body.name.length < 3){
            const name_error = "Nome inválido."
            errors.push(name_error)
        }else{
            customerName = req.body.name
        }

        if(errors.length > 0){
            res.status(400)
            res.json(errors)
            return
        }

        const customer = {
            name: customerName,
            cpf: customerCpf,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email
        }

        //Customer.create(customer)
        Vehicle.create()
        //Budget.create()
        //Order.create()

        res.status(201)
        res.send({
            Message: "Ok"
        })

    }

}

export default new CustomerController()