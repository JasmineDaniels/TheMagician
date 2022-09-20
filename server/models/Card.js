const { Schema, Types, model } = require("mongoose");

const cardSchema = new Schema(
    {
        //cards: JSON,
        name: String,
        number: String,
        arcana: String,
        img: String,
        fortune_telling: String,
        meanings: String,
        Archetype: String,
        Numerolgy: String,
        Elemental: String,

    },
    {
        toJSON: {
        getters: true,
        virtuals: true,
        },
        id: false
    },  
)

const Card = model("card", cardSchema)

module.exports = Card;
