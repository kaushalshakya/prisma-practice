const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient;
const asyncHandler = require('express-async-handler');

const loginUser = asyncHandler(async(credentials) =>{
    const response = await prisma.users.findFirst(
        {
            where : {
                OR: [ 
                    {username : credentials.username},
                    {email: credentials.email},
                ]
            }
        }
    )
    await prisma.$disconnect();
    return response;
})

const setRefreshToken = asyncHandler(async(credentials, refreshToken) =>{
    const response = await prisma.users.update(
        {
            where : {
                OR: [ 
                    {username : credentials.username},
                    {email: credentials.email},
                ]
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