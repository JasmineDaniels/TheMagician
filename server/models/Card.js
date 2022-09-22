const { Schema, Types, model } = require("mongoose");

const cardSchema = new Schema(
    {
        //cards: JSON,
        name: {
            type: String,
            // required: true,
            // unique: true,
        },
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
    {
        toJSON: {
        getters: true,
        virtuals: true,
        },
        id: false
    },  
)

cardSchema.methods.shuffleCards = function (){
    return this.cards.sort(( a, b) => Math.random() - .5)    
}

const Card = model("card", cardSchema)

module.exports = Card;
