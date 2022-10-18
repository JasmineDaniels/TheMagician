const { model, Schema } = require("mongoose");
//const Card = require('./Card')



const postSchema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
        username: {
            type: String,
        },
        message: { 
            type: String,
            minLength: 10,
            maxLength: 400,
        },
        results: [
            {
                type: Schema.Types.ObjectId,
                ref: 'card',
            },
            // {
            //     name: String,
            //     number: String,
            //     arcana: String,
            //     img: String,
            //     fortune_telling: Array,
            //     keywords: Array,
            //     meanings: Object,
            //     Numerolgy: String,
            //     Astrology: String,
            //     Affirmation: String,
            //     Questions: Array,
            // }
        ]
        ,
        createdAt: {
            type: Date,
            get: (date) => {
                let newdate = new Date().toDateString()
                return newdate
            }
        },  
    },
    {
        toJSON: {
        virtuals: true,
        getters: true,
        },
        id: false
    },  
)



const Post = model('post', postSchema)

module.exports = Post;
//module.exports = resultSchema;

// cards: [
//     {
//         type: Schema.Types.ObjectId,
//         ref: 'card',
//     },
// ],