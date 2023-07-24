'use strict';

const bcrypt = require('bcrypt')
const config = require('../config/app')

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.hasMany(models.UserRole,{foreignKey:'userId'})
            this.belongsToMany(models.Role,{through:'UserRole',foreignKey:'userId'})

        }
    };
    User.init({
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        gender: DataTypes.STRING,
        avatar: {
            type: DataTypes.STRING,
            get() {
                const avatar = this.getDataValue('avatar')
                const url = `${config.appUrl}:${config.appPort}`

                if (!avatar) {
                    return `${url}/${this.getDataValue('gender')}.svg`
                }

                const id = this.getDataValue('id')
                return `${url}/user/${id}/${avatar}`
            }
        }
    }, {
        sequelize,
        modelName: 'User',
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword
        }
    });
    return User;
};

const hashPassword = async (user) => {
    if (user.changed('password')) {
        user.password = await bcrypt.hash(user.password, 10)
    }

    return user
}