const mongoose=require('mongoose');
const dotenv=require('dotenv').config();
async function connection(){
    try {
      console.log(process.env.MONGO_URI); 
      await mongoose.connect(process.env.MONGO_URI)
      console.log('db connected')
    } catch (error) {
        if(error)  throw error;
    }
}
module.exports=connection;