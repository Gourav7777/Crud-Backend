const mongoose = require("mongoose");

 
const connect = async()=>{

    await mongoose.connect('mongodb+srv://gourav:bundiwal@cluster0.ijznaqx.mongodb.net/ProductDb?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    console.log("connected to db");
}

module.exports = connect

