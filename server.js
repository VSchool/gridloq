const ex = require('express');
const path = require('path');
const { apiRouter } = require('./routes/api');
const { enableCors, validateAuthToken } = require('./middleware/auth');
const { staticSiteRouter } = require('./routes/static');
const { errorHandler, logger } = require('./middleware/log');
const { createServer } = require('http');
const { default: mongoose } = require('mongoose');


const app = ex();
const server = createServer(app)

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(_dirname, "client", "build")));
app.use(enableCors);

// MongoDB connection
mongoose.set('strictQuery', true);
mongoose.connect(
    process.env.MONGO_URI,
    (err) => {
        if (err) {
            console.log('MongoDB connection error:', err);
            throw err;
        }
        console.log("Connected to DB")
    }
)

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
