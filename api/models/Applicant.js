const mongoose = require('mongoose');
const {Schema} = mongoose;


const UserSchema = new Schema({
    name:String,
    phoneNo:{type:String,
             unique:true,
             required:true,
            },
    college:String,
    address:String,
    job:String,
});

const UserModel = mongoose.model('Applicant', UserSchema);

module.exports = UserModel;