const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller');


router.get('/profile', userController.profile);

router.post('/create-user', userController.createUser);



module.exports = router;