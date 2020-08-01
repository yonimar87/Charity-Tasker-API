const mongoose = require('mongoose');
const { text } = require('body-parser');

const { Schema } = mongoose;

const UserSchema = new Schema(

    { 
        username: {
            type: String,
            required: 'Must have a username'

        },
        email: {
            type: String,
            required: 'Must have an email address'
        },
        password: {
            type: String,
            required: 'Must have a password'

        },
        full_name: {
            type: String

        },
        image_url: {
            type: String
        },

    },
    { collection: 'Users' }

);

module.exports = mongoose.model('Users', UserSchema);
