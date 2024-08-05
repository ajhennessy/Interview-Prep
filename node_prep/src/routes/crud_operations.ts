import { Router, Request, Response } from 'express';
import recipes from '../../assets/recipes.json';
import * as fs from 'fs';

const router = Router();

interface Recipe {
    id: number;
    name: string;
}

const typedRecipes: Recipe[] = recipes;

router.get('/recipes', (req: Request, res: Response) => {
    const page: number = parseInt(req.query.page as string) || 1;
    const limit: number = parseInt(req.query.limit as string) || 3;

    const startIndex: number = (page - 1) * limit;
    const endIndex: number = startIndex + limit;

    const paginatedRecipes: Recipe[] = typedRecipes.slice(startIndex, endIndex);

    res.json(paginatedRecipes);
});

router.post('/recipes', (req: Request, res: Response) => {
    const newItem = req.body;
    fs.readFile('assets/recipes.json', (err, data: Buffer) => {
        if (err) throw err;
        let updatedData = JSON.parse(data.toString());
        res.send(updatedData)
        
    });
})

router.put('/recipes/:id', (req: Request, res: Response) => {

})

router.delete('/recipes/:id', (req: Request, res: Response) => {

})


export default router;
