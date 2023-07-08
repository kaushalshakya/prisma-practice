const login = require('../../controllers/auth/loginUser');

const router = require('express').Router();

router.post('/', login);

module.exports = router;