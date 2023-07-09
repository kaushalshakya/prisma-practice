const express = require('express');
const app = express();

const PORT = process.env.port || 4000;

app.use(express.json());

const errorHandler = require('./middlewares/errorHandler');
const { 
    customerRegisterRoute, 
    adminRegisterRoute, 
    userRoute,
    loginRoute
} = require('./routes');

const verifyJwt = require('./middlewares/verifyJWT');

app.get('/', (req, res) =>{
    res.status(200).json(
        {
            status: 200,
            message: 'Hiiiiiiii Siluuuuuuuuuuuuuuuuuuuuuuuuuuuuuu'
        }
    )
})

app.use('/api/v1/login', loginRoute);
app.use('/api/v1/register', customerRegisterRoute);
app.use('/api/v1/admin-register', adminRegisterRoute);

app.use(verifyJwt);

app.use('/api/v1/users', userRoute);
app.use(errorHandler);

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}/`);
})