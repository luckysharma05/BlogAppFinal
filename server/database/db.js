import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@cluster0-shard-00-00.sgml2.mongodb.net:27017,cluster0-shard-00-01.sgml2.mongodb.net:27017,cluster0-shard-00-02.sgml2.mongodb.net:27017/?ssl=true&replicaSet=atlas-vs8378-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;