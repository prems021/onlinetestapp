import { Router, Response, Request } from 'express';

 import { Tas_product } from '../models/product';
import { User } from './usermodel';
import {Users } from '../models/users';

import { Sequelize, sequelize } from './dbcon';

const stockRouter: Router = Router();

 


stockRouter.get('/simple', (request: Request, response: Response) => {
  response.json({
    title: 'Greetings.',
    text: 'Hello Angular 2'
  });
});
export { stockRouter };
