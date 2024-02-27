const mongoose = require("mongoose")

const Schema = mongoose.Schema

const MychatApp = new Schema({

message:{

type : String

}

})

const Chat = mongoose.model("Chat" , MychatApp)

module.exports = Chat
