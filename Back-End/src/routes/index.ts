import { Router } from 'express';

import transactionsRouter from './transactions.routes';

const routes = Router();

routes.use('/transactions', transactionsRouter);
routes.use('/transactions/:id', transactionsRouter);

export default routes;
