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

const updateUserDetails = asyncHandler(async (id, info) => {
    const response = await prisma.users.update(
        {
            where : {
                id: id
            },
            data : {
                    first_name: info.first_name,
                    middle_name: info.middle_name,
                    last_name: info.last_name,
                    email: info.email,
                    password: info.password
            }
        }
    )
    await prisma.$disconnect();
    return response;
  });
  
const deleteUserDetails = asyncHandler(async (id) =>{
    const response = await prisma.users.delete(
        {
            where: {
                id: id
            }
        }
    )
    await prisma.$disconnect();
    return response;
})

module.exports = {
    getAllUsers,
    updateUserDetails,
    deleteUserDetails
}