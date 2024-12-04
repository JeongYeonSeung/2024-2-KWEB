import { Router } from 'express';
import { getHello } from './controller';

const router = Router();

router.get('/', getHello);
// router.use('/user', userRouter);

export default router;
