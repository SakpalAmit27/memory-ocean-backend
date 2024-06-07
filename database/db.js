import mongoose from 'mongoose';

const Connection = async (user,password) => {
    const URL  = `mongodb+srv://${user}:${password}@cluster0.czxkkbk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    try {
        await mongoose.connect(URL);
        console.log("Database connected successfully");
    } catch (err) {
        console.log("Error while connecting to database: ", err);
    }
}

export default Connection;
