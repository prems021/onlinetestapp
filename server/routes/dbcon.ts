import { Sequelize } from "sequelize";

// var sequelize = new Sequelize('mysql://b204e93cac7161:cad08e55@us-cdbr-iron-east-03.cleardb.net:3306/heroku_fcbb3d9e4d63f93');


var sequelize = new Sequelize('postgres://xnazucihybztsb:30b0add91b5ea0aa93eb3c8b91433449a209d4ea99df4e2ea1ac8c34cb2cc628@ec2-54-163-246-154.compute-1.amazonaws.com:5432/daav8etobj957o');


export {   Sequelize, sequelize };
