// import mongoose from "mongoose" 
// const connectdb=async()=>{
//     try{
//         const conn =await mongoose.connect(`mongodb://localhost:27017/chai`,{useNewUrlParser:true,});
//         console.log(`monngodb connect:${conn.connection.host}`);
//         return conn;
//     }
//     catch(error)
//     {
//         console.error(error.message);
//         process.exit(1);
//     }
// }
// export default connectdb
import mongoose from "mongoose";

const connectDb = async () => {
        try {
            const conn = await mongoose.connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log(`MongoDB Connected: ${conn.connection.host}`);
            return conn;
            
        } catch (error) {
            console.error(error.message);
            process.exit(1);
        }
    }

  export default connectDb;