const mongoose = require('mongoose');
const { text } = require('body-parser');

const { Schema } = mongoose;

const ChallengeSchema = new Schema(
    {
        category: {
            type: String,
            required: 'Must have a category'
        },

        description: {
            type: String
        },

        shortDescription: {
            type: String,
            required: 'Must have an at least a short Description'

        },

        goal: {
            type: Number,
            required: 'Needs a goal'
        },

        video_url: {
            type: String
        },

        creater_id: {
            type: String,
            required: "can't be created without an ID"
        },

        fullfilledBy_id: {
            type: String
        }

    },
     { collection: 'Challenges' }

)

module.exports = mongoose.model('Challenges', ChallengeSchema);
