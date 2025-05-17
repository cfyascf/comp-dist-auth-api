import 'dotenv/config'
import mongoose from 'mongoose';

const connectToDb = () => {
    const uri = process.env.MONGO_URI;
    if(!uri) throw new Error("Mongo URI missing.");

    mongoose.connect(uri)
        .then(() => console.log(`Connected to ${uri}.`))
        .catch((error) => console.log('Error running server: ' + error));
}

export default connectToDb;