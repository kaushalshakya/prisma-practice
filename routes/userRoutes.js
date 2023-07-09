const { 
    allUsers, 
    updateUser, 
    deleteUser
} = require('../controllers/userControllers');

const router = require('express').Router();

router.get('/', allUsers);
router.put('/profile', updateUser);
router.delete('/profile', deleteUser);

module.exports = router