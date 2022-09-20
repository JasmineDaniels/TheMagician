const { model, Schema, Types } = require("mongoose");
const Card = require('./Card')

const deckSchema = new Schema(
    {
        cards: [Card]
    },
    {
        toJSON: {
        virtuals: true,
        getters: true,
        },
        id: false
    },  
)

deckSchema.methods.shuffleCards = function (){
    
}

const Deck = model('deck', deckSchema)

module.exports = Deck;
