const router = require('express').Router();
const userRoute = require('./user-route');
const commentRoute = require('./comment-route');
const postRoute = require('./post-route');


router.use('/users/', userRoute);
router.use('/comments', commentRoute);
router.use('/posts', postRoute);

module.exports = router;