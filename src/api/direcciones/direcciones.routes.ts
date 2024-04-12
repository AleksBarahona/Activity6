import express from 'express'
import { adressController } from './direcciones.controller';

const adressRouter = express.Router();

adressRouter.get('/',adressController.getAdress)
adressRouter.get('/:id',adressController.getAdressById)

export default adressRouter