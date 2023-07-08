const customerRegisterRoute = require('./auth/registerCustomerRoute');
const adminRegisterRoute = require('./auth/registerAdminRoute');
const userRoute = require('./userRoutes');
const loginRoute = require('./auth/loginRoute');

module.exports = {
    customerRegisterRoute,
    adminRegisterRoute,
    userRoute,
    loginRoute
}