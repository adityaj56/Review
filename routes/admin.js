const express = require('express');
const router = express.Router();
const passport = require('passport');

const adminController = require('../controllers/admin_controller');

router.get('/', passport.checkAuthentication, adminController.settings);
router.get('/assign-admin', passport.checkAuthentication, adminController.assignAdmin);
router.get('/review', passport.checkAuthentication, adminController.review);

router.post('/add-for-review', passport.checkAuthentication, adminController.addForReview);
// router.get('/admin-home', home)


module.exports = router;