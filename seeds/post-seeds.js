const { Post } = require('../models');

const postData = [{
        title: 'This is the Title',
        post_body: 'This is the description',
        user_id: 1
    },
    {
        title: 'This is another Title',
        post_body: 'This is another description',
        user_id: 1
    },
    {
        title: 'This is yet another Title',
        post_body: 'This is yet another description',
        user_id: 2
    },
];
const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;