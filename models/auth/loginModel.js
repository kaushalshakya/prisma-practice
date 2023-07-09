const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient;
const asyncHandler = require('express-async-handler');

const loginUser = asyncHandler(async(username) =>{
    const response = await prisma.users.findFirst(
        {
            where : {
                username: username
            }
        }
    )
    await prisma.$disconnect();
    return response;
})

const setRefreshToken = asyncHandler(async(username, refreshToken) =>{
    const response = await prisma.users.update(
        {
            where : {
                username: username
            },
            data : {
                refresh_token: refreshToken
            }
        }
    )
    await prisma.$disconnect();
    return response;
});

module.exports = {
    loginUser,
    setRefreshToken
}