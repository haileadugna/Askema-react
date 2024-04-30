const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        mongoose.connect('mongodb+srv://hordofahaile7:TsljZnlT5yvbL1N6@cluster0.l0zfpqw.mongodb.net/newsData?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to database');
    } catch (error) {
        console.log('Error connecting to database', error);
        process.exit(1);
    }
}

module.exports = connectDb;