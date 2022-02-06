const router = require('express').Router();
const sequalize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all user posts
router.get('/', (req, res) => {
    Post.findAll({
            attributes: [
                'id',
                'description',
                'title',
                'created_at'
            ],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET one user post
router.get('/:id', (req, res) =>
Post.findOne({
    where: {
        id: req.params.id
    },
    attributes: [
        'id',
        'description',
        'title',
        'created_at'
    ],
    include: [{
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
    ]
})
.then(dbPostData => {
    if (!dbPostData) {
        res.status(404).json({ message: 'no post with this id' });
        return;
    }
    res.json(dbPostData);
})
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});