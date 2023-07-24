'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.UserRole,{foreignKey:'roleId'})
      this.belongsToMany(models.User,{through:'UserRole',foreignKey:'roleId'})
    }
  }
  Role.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};