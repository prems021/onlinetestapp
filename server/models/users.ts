import {  sequelize , Sequelize } from '../routes/dbcon';
const Users = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

export {Users};
