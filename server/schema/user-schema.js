import mongoose from "mongoose";
import autoincrement from 'mongoose-auto-increment';
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String

})

autoincrement.initialize(mongoose.connection);
userSchema.plugin(autoincrement.plugin, 'data');

const user = mongoose.model('data', userSchema);

export default user;