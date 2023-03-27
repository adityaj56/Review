const express = require('express');
const router = express.Router();
const passport = require('passport');

const reviewController = require('../controllers/review_controller');

router.get('/', passport.checkAuthentication, reviewController.page);
router.post('/create-review', passport.checkAuthentication, reviewController.createReview);

module.exports = router;