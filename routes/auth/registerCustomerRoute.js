const registerUser = require('../../controllers/auth/registerUser');

const router = require('express').Router();

router.post('/', registerUser);

module.exports = router