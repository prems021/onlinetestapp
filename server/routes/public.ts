

import { Router, Response, Request } from 'express';

 import { Tas_product } from '../models/product';
import { User } from './usermodel';
import {Users } from '../models/users';

import { Sequelize, sequelize } from './dbcon';

const publicRouter: Router = Router();

 


publicRouter.get('/simple', (request: Request, response: Response) => {
  response.json({
    title: 'Greetings.',
    text: 'Hello Angular 2'
  });
});


publicRouter.get('/list_user', (request: Request, response: Response) => {
 
  const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});
// force: true will drop the table if it already exists
  
  User.findAll({
  attributes: ['firstName', 'lastName']
}).
then(users => {
  response.json({
  users
  });
 
});
});


publicRouter.get('/list', (request: Request, response: Response) => {
 

// force: true will drop the table if it already exists
  
  Users.findAll({
  attributes: ['firstName', 'lastName']
}).
then(users => {
  response.json({
  users
  });
 
});
});


 publicRouter.get('/add_stock_item', (request: Request, response: Response) => {
 Tas_product.sync({force: true}).then(() => {
  //Table created
  return Tas_product.create({
    NAME: 'Ghee',
    HAS_STOCK: true,
    IS_POOJA: false,
     });
 });
   
 });


 publicRouter.get('/view_stock_item', (request: Request, response: Response) => {
 Tas_product.findAll({
  attributes: { exclude: ['PARTY'] }
}).then(stocks => {
  response.json({
  stocks
  });
 
    });

   
 });

 publicRouter.post('/login_check', (request: Request, response: Response) => {
   var username = request.body.username;
   var password = request.body.password;
    
    Users.findOne({
  where: {
    firstName: request.body.username,
    lastName: request.body.password
    }
}).then(function(result){
  
                                                if(result)
                                                {
                                                return response.json({success:true, msg:'Successfully logged'});

                                                }   
                                                else
                                                {

                                                response.status(403).send({success: false, msg: 'Authentication failed, User not found'});
                                                }    
                         });
   
   
   
   
 

   
 });




export { publicRouter }
