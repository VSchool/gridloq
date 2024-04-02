const ex = require('express');
const { exampleRouter } = require('./example');


const apiRouter = ex.Router();

apiRouter.use('/examples', exampleRouter);


module.exports = {
    apiRouter
}