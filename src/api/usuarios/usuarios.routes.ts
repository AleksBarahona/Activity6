import express from 'express'
import { userController } from './usuarios.controller';

const userRouter = express.Router();

userRouter.get('/',userController.getUsers)
userRouter.get('/:id',userController.getUserById)
userRouter.post('/', userController.createUser)
userRouter.delete('/:id', userController.deleteUser);
export default userRouter