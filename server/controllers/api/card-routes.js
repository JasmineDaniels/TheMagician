const { Card } = require('../../models');
const cards = require('../../utils/tarot-data.json')
const router = require('express').Router();

router.post('/seed', async (req, res) => {
    try {
        const allCards = await Card.insertMany(cards) 
        res.json(allCards)
    } catch (error) {
        res.status(500).json(error)
    }
    
})



module.exports = router