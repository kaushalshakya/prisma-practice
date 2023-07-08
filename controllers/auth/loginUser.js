const {
    loginUser, setRefreshToken
} = require('../../models/auth/loginModel');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = asyncHandler(async (req, res) =>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    if(!(username || email) || !password) { 
        return res.status(400).json(
            {
                status: 400,
                message: 'Please enter your password and username or email address to login madafaka'
            }
        )
    }
    const credentials = {
        username: username,
        email: email,
        password: password
    }
    const result = await loginUser(credentials);
    const dbPassword = result.password;
    const checkPassword = bcrypt.compareSync(password, dbPassword);
    if(!checkPassword){
        return res.status(400).json(
            {
                status: 400,
                message: 'Password milena mampakha'
            }
        )
    }
    const accessToken = jwt.sign(
        {
            userInfo: username? username : email,
            role: result.role_id
        },
        process.env.ACCESS_TOKEN,
        {
            expiresIn: '5m'
        }
    )
    const refreshToken = jwt.sign(
        {
            userInfo: username? username : email,
            role: result.role_id
        },
        process.env.REFRESH_TOKEN,
        {
            expiresIn: '25m'
        }
    )
    setRefreshToken(credentials, refreshToken)
    res.status(200).json(
        {
            status: 200,
            message: 'Logged in successfully',
            accessToken: accessToken,
            refreshToken: refreshToken
        }
    )
})

module.exports = login