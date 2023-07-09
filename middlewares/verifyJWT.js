const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJwt = (req, res, next) =>{
    const authHeader = req.headers['authorization'];
    if(!authHeader){
        return res.status(401).json(
            {
                status: 401,
                message: 'Unauthenticated'
            }
            )
        }
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) =>{
        if(err){
            return res.status(400).json(
                {
                    status: 400,
                    message: 'Your token has expired or has been tampered'
                }
            )
        }
        req.username = decoded.username;
        req.role = decoded.role;
        req.id = decoded.id;
        next();
    })
}

module.exports = verifyJwt