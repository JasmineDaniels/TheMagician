const { model, Schema, Types } = require("mongoose");

const deckSchema = new Schema(
    {   
        // cards: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'card'
        //     }
        // ],
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
    {
        toJSON: {
        virtuals: true,
        getters: true,
        },
        id: false
    },  
)

//make virtual
deckSchema.methods.numberOfCards = function() {
    return this.cards.length
}

deckSchema.methods.shuffleCards = function (){
    for (let i = this.cards.length - 1; i > 0; i--) {
        const newIndex = Math.floor(Math.random() * (i + 1))
        const oldValue = this.cards[newIndex]
        this.cards[newIndex] = this.cards[i]
        this.cards[i] = oldValue
    }    
}

const Deck = model('deck', deckSchema)

module.exports = Deck;
