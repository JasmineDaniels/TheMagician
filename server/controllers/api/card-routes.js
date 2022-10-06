const { Card, Deck } = require('../../models');
const cards = require('../../utils/tarot-data.json')
const router = require('express').Router();

//Get all cards
router.get('/', async (req, res) => {
    try {
        const allCards = await Card.find({}).lean() 
        res.json(allCards)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Get one card
router.get('/:_id', async (req, res) => {
    try {
        //Drop Deck collection..
        const oneCard = await Card.findById({_id: req.params._id}) 
        res.json(oneCard)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Post card to results
router.post('/:_id', async (req, res) => {
    try {
        //Drop Deck collection..
        const oneCard = await Card.findById({_id: req.params._id})
        // const updateUser
        res.json(oneCard)
    } catch (error) {
        res.status(500).json(error)
    }
})



//Create Fresh Deck - wip
router.post('/deck', async (req, res) => {
    try {
        await Deck.deleteMany({}) 
        await Deck.create(cards)
        const getDeck = await Deck.find({}).lean()
        //const test = new Deck(getDeck) 
        //const shuffle = getDeck.shuffleCards()
        //const shuffle = test.shuffleCards()

        if (!getDeck){
            res.status(404).json({message: `No cards in Deck.`})
        } res.json(getDeck)
    } catch (error) {
        res.status(500).json(error)
    }
    
})

//One card in the deck - test
// router.get('/deck/:_id', async (req, res) => {
//     try {
//         //Drop Deck collection..
//         const oneCard = await Deck.findById({_id: req.params._id}) 
//         res.json(oneCard)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

module.exports = router