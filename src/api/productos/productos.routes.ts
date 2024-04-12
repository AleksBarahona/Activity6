import express from 'express'
import { productController } from './productos.controller';

const ProductSessionsRouter = express.Router();

ProductSessionsRouter.get('/',productController.getProducts)
ProductSessionsRouter.get('/:id',productController.getProductById)

export default ProductSessionsRouter