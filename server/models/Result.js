const { model, Schema } = require("mongoose");
//const Card = require('./Card')



const resultSchema = new Schema(
    {
        comments: String,
        cards: [
            {
                type: Schema.Types.ObjectId,
                ref: 'card',
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



const Result = model('result', resultSchema)

module.exports = Result;
