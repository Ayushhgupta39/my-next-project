import mongoose from "mongoose";

let isConnected = false; // Track the connection status

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if(isConnected) {
        console.log("MongoDb is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {

    }
}