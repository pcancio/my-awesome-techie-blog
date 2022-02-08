const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [{
        username: 'amyapple',
        email: 'amyapple@gmail.com',
        password: 'abcdefg'
    },
    {
        username: 'barryberry',
        email: 'barryberry@gmail.com',
        password: 'abcdefg'
    },
    {
        username: 'camco',
        email: 'camco@gmail.com',
        password: 'abcdefg'
    },
    {
        username: 'daviddy',
        email: 'daviddy@gmail.com',
        password: 'abcdefg'
    },
];
const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });
module.exports = seedUsers;