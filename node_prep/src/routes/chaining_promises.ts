import { Router, Request, Response } from 'express';

const router = Router();

function stepOne(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Step one complete');
        }, 1000);
    });
}

function stepTwo(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Step two complete');
        }, 2000);
    });
}

router.get('/', (req: Request, res: Response) => {
    stepOne()
    .then((result: string) => {
        console.log(result);
        return stepTwo();
    })
    .then((result: string) => {
        console.log(result)
        res.json(result)
    })
    .catch((error: any) => {
        console.error(`Error: ${error}`);
    });
})

export default router