import { Router, Request, Response } from 'express';
import recipesRouter from './recipes';
import chainRouter from './chaining_promises';
import eventLoopRouter from './event_loop_example';
import crudRouter from './crud_operations';

const router = Router();

router.get('/hello', (req: Request, res: Response) => {
    res.json({ message: 'Hello, API!' });
});

router.use('/recipes', recipesRouter);
router.use('/chain', chainRouter);
router.use('/eventLoop', eventLoopRouter)
router.use('/crud', crudRouter)

export default router;