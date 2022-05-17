const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    course: {
        type: Array,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false,
    },
    country: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    number: {
        type: String,
        required: false
    },
    church: {
        type: String,
        required: false
    }

});

module.exports = model('User', UserSchema);
