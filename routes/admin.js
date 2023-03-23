const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin_controller');

router.get('/', adminController.settings);
router.get('/assign-admin', adminController.assignAdmin);

router.post('/add-for-review', adminController.addForReview);
// router.get('/admin-home', home)


module.exports = router;