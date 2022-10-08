const { model, Schema } = require("mongoose");
//const Card = require('./Card')
const bcrypt = require('bcrypt');

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
            
        },
        password: {
            type: String,
            required: true
        },
        results: [
            {
                name: String,
                number: String,
                arcana: String,
                img: String,
                fortune_telling: Array,
                keywords: Array,
                meanings: Object,
                Numerolgy: String,
                Astrology: String,
                Affirmation: String,
                Questions: Array,
            },
        ],
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

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
});
  
// custom method to compare and validate password for logging in
userSchema.methods.checkPW = async function (password) {
    const user = this
    return bcrypt.compareSync(password, user.password);
};

// userSchema.methods.comparePassword = function(password, callback) {
//     bcrypt.compare(password, this.password, function(error, isMatch) {
//       if (error) {
//         return callback(error)
//       } else {
//         callback(null, isMatch)
//       }
//     })
// }


const User = model('user', userSchema)

module.exports = User;
