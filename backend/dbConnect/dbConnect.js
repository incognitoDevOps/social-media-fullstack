import mongoose from "mongoose";

export const dbConnect = () =>{
    try {
        mongoose.connect(process.env.DB_URL);
        console.log('Database Has Been Connected Successfully')
    } catch (error) {
        console.log(error)
    }
}