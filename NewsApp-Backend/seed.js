require('dotenv').config();
const connectDataBase = require('./config/db');

const News = require('./models/News');
const newsData = require('./utils/news');
const Admin = require('./models/Admin');
const adminData = require('./utils/admin');

connectDataBase();

const importData = async () => {
    try {

        await News.deleteMany();
        await News.insertMany(newsData);

        await Admin.deleteMany();
        await Admin.insertMany(adminData);

        console.log('Data inserted successfully!');
        process.exit();

    } catch (error) {
        console.log('error', error);
        process.exit(1);
    }
};

importData();