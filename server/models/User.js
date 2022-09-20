const { model, Schema } = require("mongoose");
const Card = require('./Card')

function validateEmail(email){
    const re = /^([a-z0-9A-Z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,6})?$/
    return re.test(email)
}

const userSchema = new Schema(
    {
        birthdate: Date,
        horoscope: String,
        username: {
            type: String, 
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            validate: [validateEmail, 'Please fill in a valid email address'],
            //match: [/^([a-z0-9A-Z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,6})?$/, 'Please fill in a valid email address']
            
        },
        results: [Card],
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'post',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user',
            },
        ],
             

    },
    {
        toJSON: {
        virtuals: true,
        },
        id: false
    },
)

// userSchema.virtual('friendCount')
//     .get(function () {
//         return this.friends.length;
//     })

const User = model('user', userSchema)

module.exports = User;
