import express, { Request, Response } from 'express';
import userRouter from './api/usuarios/usuarios.routes';

const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/', (_req: Request, res: Response) => {
	res.send('Hello world!!');
});
app.use('/api/usuarios', userRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});