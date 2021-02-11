import { Request, Response } from 'express'

class HomeController {

    index(req: Request, res: Response) {
        res.status(200).send({
            Message: "TS Management online."
        })
    }

}

export default new HomeController()