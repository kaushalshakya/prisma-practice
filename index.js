const express = require('express');
const app = express();

const PORT = process.env.port || 4000;

app.use(express.json());

const errorHandler = require('./middlewares/errorHandler');
const { 
    customerRegisterRoute, 
    adminRegisterRoute, 
    userRoute
} = require('./routes');

app.get('/', (req, res) =>{
    res.status(200).json(
        {
            status: 200,
            message: 'Hiiiiiiii Siluuuuuuuuuuuuuuuuuuuuuuuuuuuuuu'
        }
    )
})

app.use('/api/v1/login', customerRegisterRoute);
app.use('/api/v1/admin-login', adminRegisterRoute);
app.use('/api/v1/users', userRoute);
app.use(errorHandler);

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}/`);
})