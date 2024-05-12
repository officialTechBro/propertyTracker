import mongoose from "mongoose";

let connected = false

const dbConnect = async () => {
    mongoose.set('strictQuery', true)

    if (connected) {
        console.log('MongoDb already connected')
        return
    }

    try {
        await mongoose.connect(process.env.MONGO_URI)
        connected = true
        console.log('MongoDB is connected')
    } catch (error) {
        console.log(error)
    }
}

export default dbConnect