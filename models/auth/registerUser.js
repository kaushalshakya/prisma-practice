const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient;
const asyncHandler = require('express-async-handler');

const postNewUser = asyncHandler(async(info) =>{
    const response = await prisma.users.create(
        {
            data: {
                email: info.email,
                username: info.username,
                first_name: info.first_name,
                middle_name: info.middle_name,
                last_name: info.last_name,
                password: info.password,
                role_id: info.role_id
            }
        }
    )
    await prisma.$disconnect();
    console.log(response);
    return response;
})

module.exports = {
    postNewUser
}