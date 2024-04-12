import express from 'express'
import { sesionesController } from './sesiones.controller';

const ProductSessionsRouter = express.Router();

ProductSessionsRouter.get('/',sesionesController.getSessions)
ProductSessionsRouter.get('/:id',sesionesController.getSessionById)

export default ProductSessionsRouter