const mongoose = require('mongoose')

function connectDB(){
    mongoose.connect(process.env.MONGO_URl)
    .then(()=>{
        console.log("Database Connected")
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDB