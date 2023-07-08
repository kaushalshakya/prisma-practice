const errorHandler = (err, req, res ,next) =>{
    const status = 500;
    console.log(err.stack);
    return res.status(status).json(
        {
            status: status,
            message: err.message
        }
    )
}

module.exports = errorHandler