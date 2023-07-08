const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const { postNewUser } = require('../../models/auth/registerUser');

const registerUser = asyncHandler(async(req, res) =>{
    const password = req.body.password;
    const confirmPassword = req.body.confirm_password;
    if(!(password === confirmPassword)){
        return res.status(400).json(
            {
                status: 400,
                message: 'Mampakha password and confirm password milena'
            }
        )
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    console.log(hash);
    const endpoint = req.originalUrl;
    const parts = endpoint.split('/').filter(part => part !== '');
    const slug = parts[parts.length -1];

    const data = {
        email: req.body.email,
        username: req.body.username,
        first_name: req.body.first_name,
        middle_name: req.body.middle_name,
        last_name: req.body.last_name,
        password: hash,
        role_id: (slug === 'login')? 1 : 2 
    }
    const result = postNewUser(data);
    return res.status(200).json(
        {
            status: 200,
            message: 'Your account has been created successfully!'
        }
    )
})

module.exports = registerUser