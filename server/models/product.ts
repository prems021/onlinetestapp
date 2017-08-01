import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_product = sequelize.define('tas_product', {
    ID: {
      type: Sequelize.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NAME: {
      type: Sequelize.STRING,
      allowNull: false
    },
    CODE: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    DESCRIPTION: {
      type: Sequelize.STRING,
      allowNull: true
    },
    PRICE: {
      type: Sequelize.DOUBLE,
      allowNull: true
    },
    CUR_QTY: {
      type: Sequelize.DOUBLE,
      allowNull: true
    },
    HAS_STOCK: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    INCOME_ACCOUNT: {
      type: Sequelize.INTEGER(6),
      allowNull: true
      
    },
    EXPENSE_ACCOUNT: {
      type: Sequelize.INTEGER(6),
      allowNull: true
     
    },
    DEFAULT_UNIT: {
      type: Sequelize.INTEGER(3),
      allowNull: true
    },
    PARTY: {
      type: Sequelize.BIGINT,
      allowNull: true
     
    },
    IS_POOJA: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    DEITY: {
      type: Sequelize.INTEGER(6),
      allowNull: true
      
    },
    CATEGORY: {
      type: Sequelize.INTEGER(6),
      allowNull: true
    
    },
    IS_DONATION: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_SAMARPANAM: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_MARRIAGE: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_RENTAL: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_AUDITORIUM: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_PURCHASE: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_SALARY: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_NADAVARAVU: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'tas_products',
     timestamps: false
  });


export {Tas_product};
