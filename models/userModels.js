const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient;
const asyncHandler = require('express-async-handler');

const getAllUsers = asyncHandler(async () =>{
    const response = await prisma.users.findMany(
        {
            include:{
                role: true
            }
        }
    );
    await prisma.$disconnect();
    return response;
})

module.exports = {
    getAllUsers
}