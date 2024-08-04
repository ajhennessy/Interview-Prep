import { Router, Request, Response } from 'express';
import recipes from '../recipes.json';

const router = Router();

interface Recipe {
    id: number;
    name: string;
}

const typedRecipes: Recipe[] = recipes;

router.get('/', (req: Request, res: Response) => {
    const page: number = parseInt(req.query.page as string) || 1;
    const limit: number = parseInt(req.query.limit as string) || 3;

    const startIndex: number = (page - 1) * limit;
    const endIndex: number = startIndex + limit;

    const paginatedRecipes: Recipe[] = typedRecipes.slice(startIndex, endIndex);

    res.json(paginatedRecipes);
});

export default router;