const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const imagesRouter = require('./routes/imagesRouter')
const studentRouter = require('./routes/studentRouter')
const drRouter = require('./routes/drRouter')
const courseRouter = require('./routes/courseRouter')

const app = express();


if (process.env.NODE_ENV === 'development')
    app.use(morgan('dev'))


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/image', imagesRouter);
app.use('/student', studentRouter)
app.use('/dr', drRouter)
app.use('/course', courseRouter)

module.exports = { app }