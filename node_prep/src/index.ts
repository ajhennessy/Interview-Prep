import express, { Application, Request, Response } from 'express';
import routes from './routes';

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', routes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});