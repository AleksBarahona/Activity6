import express, { Request, Response } from 'express';
import cors from 'cors';
import userRouter from './api/usuarios/usuarios.routes';
import categoryRouter from "./api/categorias/categorias.routes"
import customerRouter from "./api/clientes/clientes.routes"
import adressRouter from "./api/direcciones/direcciones.routes"
import genderRouter from "./api/generos/generos.routes"
import productRouter from './api/productos/productos.routes';
import sesionRouter from './api/sesiones/sesiones.routes';
import sessionRouter from './api/sesiones_productos/sesiones_productos.routes';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get('/', (_req: Request, res: Response) => {
	res.send('Hello world!!');
});
app.use('/api/usuarios', userRouter);
app.use('/api/categorias', categoryRouter);
app.use('/api/clientes', customerRouter);
app.use('/api/direcciones', adressRouter);
app.use('/api/generos', genderRouter);
app.use('/api/productos', productRouter);
app.use('/api/sesiones', sesionRouter);
app.use('/api/sesionesProductos', sessionRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});