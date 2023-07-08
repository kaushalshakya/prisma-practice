const customerRegisterRoute = require('./auth/registerCustomerRoute');
const adminRegisterRoute = require('./auth/registerAdminRoute');
const userRoute = require('./userRoutes');

module.exports = {
    customerRegisterRoute,
    adminRegisterRoute,
    userRoute
}