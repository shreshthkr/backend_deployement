const mongoose=require("mongoose");
require("dotenv").config()

const connection = mongoose.connect(process.env.mongoUrl)
//mongodb+srv://shreshth:<password>@cluster0.pkc715v.mongodb.net/?retryWrites=true&w=majority

module.exports = {
    connection
}