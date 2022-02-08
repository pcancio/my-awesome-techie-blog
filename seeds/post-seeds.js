const { Post } = require('../models');

const postData = [{
        title: 'This is the Title',
        description: 'This is the description',
        user_id: 1
    },
    {
        title: 'This is another Title',
        description: 'This is another description',
        user_id: 1
    },
    {
        title: 'This is yet another Title',
        description: 'This is yet another description',
        user_id: 2
    },
];
const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;