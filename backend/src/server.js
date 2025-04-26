const path = require('path');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const { app } = require('./app')



dotenv.config({ path: './config.env' });

const DB = process.env.DATA_BASE_CONNECTION
mongoose.connect(DB)
    .then(() => { console.log('DB Connection sucessful') })
    .catch(err => console.error('DB Connection error:', err))


const PORT = 5002;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});