const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    oauthID: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;