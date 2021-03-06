const { Schema, model } = require('mongoose');
const moment = require('moment');

// User schema
const userSchema = new Schema (
    {
    username: {
        type: String, 
        unique: true, 
        required: true, 
        trim: true,
    },
    email: {
        type: String, 
        required: true, 
        unique: true, 
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please use a valid email address'],
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ]
    },
    {
        toJSON: {
            virtuals: true, 
            getters: true, 
        },
        id: false,
        strict: false,
    }
);

// Create the User model using the userSchema
const User = model('User', userSchema);

// Friend count that retrieves the length of the user's friends array field on query
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// Export the User model
module.exports = User; 