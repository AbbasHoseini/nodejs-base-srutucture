'use strict';

const bcrypt = require('bcrypt')

module.exports = {
    up: async (queryInterface, Sequelize) => {
   

        await queryInterface.bulkInsert('Users', [
            {
                firstName: 'saeed',
                lastName: 'mohammadi',
                email: 'saeed@gmail.com',
                password: bcrypt.hashSync('secret', 10),
                gender: 'male'
            },
            {
                firstName: 'abbas',
                lastName: 'hoseini',
                email: 'abbas@gmail.com',
                password: bcrypt.hashSync('secret', 10),
                gender: 'male'
            },
            {
                firstName: 'hadi',
                lastName: 'moghaddm',
                email: 'hadi@gmail.com',
                password: bcrypt.hashSync('secret', 10),
                gender: 'male'
            },
        ])
    },

    down: async (queryInterface, Sequelize) => {
      

        await queryInterface.bulkDelete('Users', null, {});
    }
};
