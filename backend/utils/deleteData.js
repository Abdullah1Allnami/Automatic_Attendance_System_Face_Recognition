const { User } = require('../src/models/userModel')
const { Dr } = require('../src/models/drModel')
const { Course } = require('../src/models/courseModel')
const mongoose = require('mongoose')


const DB = 'mongodb+srv://bdallhsydalnmy2:e4lWCLNcypA7Nz7e@faceidentificationsyste.fjhso.mongodb.net/?retryWrites=true&w=majority&appName=faceIdentificationSystemS'
mongoose.connect(DB)
    .then(() => { console.log('DB Connection sucessful') })
    .catch(err => console.error('DB Connection error:', err))


const deleteData = async () => {
    try {
        await User.deleteMany();
        await Dr.deleteMany();
        await Course.deleteMany();
        console.log('Data successfully deleted');
    } catch (err) {
        console.log(err);
    } finally {
        mongoose.connection.close();
        process.exit(0);
    }
};

if (process.argv.includes('--delete')) {
    deleteData();
}
