const { model, Schema, Types } = require("mongoose");

const readingSchema = new Schema(
    {   
        results: [
            {
                type: Schema.Types.ObjectId,
                ref: 'card',
            },
        ],
        createdAt: {
            type: Date,
            default: Date.now,
            // get: (date) => {
            //     let newdate = new Date().toDateString()
            //     return newdate
            // }
        },  
    },
    // {
    //     timestamps: true,
    // },
    {
        toJSON: {
        virtuals: true,
        getters: true,
        },
        id: false
    },  
)

//make virtual


const Reading = model('reading', readingSchema)

module.exports = Reading;
