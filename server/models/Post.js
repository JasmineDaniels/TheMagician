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
            minLength: 0,
            maxLength: 400,
        },
        // results: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'card',
        //     },
        // ]
        reading: {
            type: Schema.Types.ObjectId,
            ref: 'reading',
        },
        createdAt: {
            type: Date,
            default: Date.now
            // get: (date) => {
            //     let newdate = new Date().toDateString()
            //     return newdate
            // }
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