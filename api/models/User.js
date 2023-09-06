const mongoose = require('mongoose');
const {Schema} = mongoose;


const UserSchema = new Schema({
    name:String,
    phoneNo:{type:String,unique:true},
    college:String,
    address:String,
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;