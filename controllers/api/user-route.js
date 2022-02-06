const router = require('express').Router();
const User = require('../../models/User');

// create a new user
router.post('/', async(req, res) => {
    try {
        const dbUserData = await User.create({
            usermame: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

})

router.post('/login', async(req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                email: req.body.username
            }
        });
        if (!dbUserData) {
            res.status(400).json({ message: 'no user with that email exists.' });
            return;
        }
        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'incorrect password.' });
            return;
        }
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user_id = dbUserData.id;
            res.status(200)
                .json({ user: dbUserData, message: 'you are logged in.' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// user logout and delete old session
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;