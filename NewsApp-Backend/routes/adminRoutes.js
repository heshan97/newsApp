const express = require('express');
const router = express.Router();
const {
    registerAdmin,
    loginAdmin,
} = require('../controller/adminController');

//register a admin
router.post('/register', registerAdmin);

//login a admin
router.post('/login', loginAdmin);

module.exports = router;
