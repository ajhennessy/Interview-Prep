import { Router, Request, Response } from 'express';

const router = Router();

router.get('/hello', (req: Request, res: Response) => {
    res.json({ message: 'Hello, API!' });
  });
  
export default router;