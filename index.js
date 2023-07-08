const express = require('express');
const app = express();

const PORT = process.env.port || 4000;

app.use(express.json());

app.use('/', (req, res) =>{
    res.status(200).json(
        {
            status: 200,
            message: 'Hiiiiiiii Siluuuuuuuuuuuuuuuuuuuuuuuuuuuuuu'
        }
    )
})

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}/`);
})