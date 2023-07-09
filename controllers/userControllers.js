const {
    getAllUsers,
    updateUserDetails,
    deleteUserDetails
} = require('../models/userModels');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');

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

const updateUser = asyncHandler(async(req, res) =>{
    if(req.body.password){
        const salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
    }
    const id = parseInt(req.id);
    const data = {
        email: req.body.email,
        username: req.body.username,
        first_name: req.body.first_name,
        middle_name: req.body.middle_name,
        last_name: req.body.last_name,
        password: hash
    }

    const result = await updateUserDetails(id, data);
    return res.status(200).json(
        {
            status: 200,
            message: 'Your details have been updated successfully'
        }
    )
})

const deleteUser = asyncHandler(async(req, res) =>{
    const id = parseInt(req.id);
    const result = await deleteUserDetails(id);
    return res.status(200).json(
        {
            status: 200,
            message: 'Your account has been deleted successfully'
        }
    )
})

module.exports = {
    allUsers,
    updateUser,
    deleteUser
}