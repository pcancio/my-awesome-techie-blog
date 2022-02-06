const router = require('express').Router();
const sequalize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
            console.log('===============');
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