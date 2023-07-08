const {
    getAllUsers
} = require('../models/userModels');
const asyncHandler = require('express-async-handler');

const allUsers = asyncHandler(async(req, res) =>{
    const result = await getAllUsers();
    if(!result){
        return res.status(400).json(
            {
                status: 400,
                message: 'No data available T.T'
            }
        )
    }
    return res.status(200).json(
        {
            status: 200,
            message: 'All users',
            data: result
        }
    )
})

module.exports = {
    allUsers
}