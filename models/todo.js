'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Todo.init({
    name: DataTypes.STRING,
    isDone: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Todo',
  });
  Todo.associate = function (models) {
    // Todo.belongsTo(models.User)
  }
  return Todo;
};

// 'use strict'
// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.createTable('Todos', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       name: {
//         allowNull: false,
//         type: Sequelize.STRING
//       },
//       isDone: {
//         type: Sequelize.BOOLEAN,
//         defaultValue: false
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     })
//   },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.dropTable('Todos')
//   }
// }
