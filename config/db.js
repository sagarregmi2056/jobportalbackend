import mongoose from "mongoose";
const connectDB = async()=>{
    try{
        // passing url to the connection string 
      const conec = await mongoose.connect(process.env.MONGO_LOCAL_URL)
      console.log(`connected to the mongodb database ${mongoose.connection.host}`)
    }catch(error){
        console.log(`its a mongodb error ${error}`);

    }
}
export default connectDB;