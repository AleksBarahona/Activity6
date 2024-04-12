import express from 'express'
import { sesiones_productosController } from './sesiones_productos.controller';

const ProductSessionsRouter = express.Router();

ProductSessionsRouter.get('/',sesiones_productosController.getProductSessions)
ProductSessionsRouter.get('/:id',sesiones_productosController.getProductSessionById)

export default ProductSessionsRouter