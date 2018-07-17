const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: String,
    password: String
}, {
    timestamps: true
});