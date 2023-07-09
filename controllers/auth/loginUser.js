const {
    loginUser, setRefreshToken
} = require('../../models/auth/loginModel');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = asyncHandler(async (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;
    if(!username || !password) { 
        return res.status(400).json(
            {
                status: 400,
                message: 'Please enter your password and username or email address to login madafaka'
            }
        )
    }
    const result = await loginUser(username, password);
    console.log(result);
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
            username: username,
            role: result.role_id,
            id: result.id
        },
        process.env.ACCESS_TOKEN,
        /*{
            expiresIn: '5m'
        }*/
    )
    const refreshToken = jwt.sign(
        {
            username: username,
            role: result.role_id,
            id: result.id
        },
        process.env.REFRESH_TOKEN,
        /*{
            expiresIn: '25m'
        }*/
    )
    setRefreshToken(username, refreshToken)
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