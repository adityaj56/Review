const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login_controller');

router.get('/', loginController.login);
router.get('/sign-up', loginController.signup)

router.use('/home', require('./home'));
router.use('/user', require('./users'));

module.exports = router;