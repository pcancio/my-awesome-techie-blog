const { Comment } = require('../models');
const commentData = [{
        comment_text: 'This is some text in this comment.',
        user_id: 3,
        post_id: 1
    }, {
        comment_text: 'This is some text in this commenting.',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'This is some texting in this comment.',
        user_id: 3,
        post_id: 2
    },
    {
        comment_text: 'This is something text in this comment.',
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: 'This is some text in this comment also.',
        user_id: 1,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;