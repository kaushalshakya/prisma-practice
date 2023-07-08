const { 
    allUsers 
} = require('../controllers/userControllers');

const router = require('express').Router();

router.get('/', allUsers);

module.exports = router