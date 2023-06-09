const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controllers/user_controller');


router.get('/profile', passport.checkAuthentication, userController.profile);

router.post('/create-user', userController.createUser);





module.exports = router;