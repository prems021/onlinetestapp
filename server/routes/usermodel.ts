
import { Sequelize  } from "./dbcon";
var User = Sequelize.sequelize.define('User', {
  id: { type: Sequelize.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  USERNAME: Sequelize.DataTypes.STRING,
  PASSWORD: Sequelize.DataTypes.STRING
});


export {  User };
