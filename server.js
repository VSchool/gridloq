const ex = require('express');
const path = require('path');
const { apiRouter } = require('./routes/api');
const { enableCors, validateAuthToken } = require('./middleware/auth');
const { staticSiteRouter } = require('./routes/static');
const { errorHandler, logger } = require('./middleware/log');
const { createServer } = require('http');

const app = ex();
const server = createServer(app)

app.use(logger)
app.use(enableCors)
app.use(ex.static(path.resolve(__dirname, 'client', 'dist')))
app.use(ex.json());
app.use(ex.urlencoded({ extended: true }));

app.use('/api', validateAuthToken, apiRouter)
app.get('*', staticSiteRouter)

app.use(errorHandler);


module.exports = {
    server
}
