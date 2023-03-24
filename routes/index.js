const express = require('express');
const router = express.Router();
const passport = require('passport');

const loginController = require('../controllers/login_controller');

router.get('/', loginController.login);
router.get('/sign-up', loginController.signup)
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/'}
    ), loginController.createSession);
router.get('/logout', loginController.logout);

router.use('/admin', require('./admin'));
router.use('/user', require('./users'));
router.use('/review', require('./review'));


module.exports = router;