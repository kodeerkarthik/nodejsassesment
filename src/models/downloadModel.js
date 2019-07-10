import mongoose from 'mongoose'
 
const Schema = mongoose.Schema
 
const UserSchema = new Schema({
    Firstname: {
        type: String
    },
    Lastname:{
    type: String
    },
    Email : {
     type: String
    },
    Password:{
     type: String
    },
    ConformPassword:{
        type: String
    },
       Created_at:{
        type: Date,
        default: Date.now
       },
       Updated_at:{
        type: Date,
        default: Date.now
       }
})
 
export default UserSchema;