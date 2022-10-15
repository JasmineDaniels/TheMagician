const { model, Schema } = require("mongoose");
//const Card = require('./Card')



const resultSchema = new Schema(
    {
        results: [
            {
                type: Schema.Types.ObjectId,
                ref: 'card',
            },
        ],
        // results: [
        //     {
        //         name: String,
        //         number: String,
        //         arcana: String,
        //         img: String,
        //         fortune_telling: Array,
        //         keywords: Array,
        //         meanings: Object,
        //         Numerolgy: String,
        //         Astrology: String,
        //         Affirmation: String,
        //         Questions: Array,
        //     },
        // ],
    },
    {
        toJSON: {
        virtuals: true,
        },
        id: false
    },
    {
        timestamps: true,
    }
)



//const Result = model('result', resultSchema)

//module.exports = Result;
module.exports = resultSchema;

// cards: [
//     {
//         type: Schema.Types.ObjectId,
//         ref: 'card',
//     },
// ],