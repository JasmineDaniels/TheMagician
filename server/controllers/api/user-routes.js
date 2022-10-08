const router = require('express').Router();
const { User, Card } = require("../../models");
const { signToken } = require('../../utils/auth')

router.get('/', async (req, res) => {
    try {
        const allUsers = await User.find({}).lean() 
        res.json(allUsers)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/signup', async (req, res) => {
    console.log(req.body);
    const user = await User.create(req.body);
    if (!user){
        res.status(400).json({message: `Cannot create your account at this time`})
    }
    const token = signToken(user);
    res.json({ token, user });
})

router.post('/login', async (req, res) => {
    console.log(req.body)
    const user = await User.findOne({ $or: [{username: req.body.username}, {email: req.body.email}]}).lean()
    if (!user){
        res.status(400).json({ message: `No user with this email: ${req.body.email}`})
    }
    //correct pw
    const validPassword = await user.checkPW(req.body.password)
    if (!validPassword){
        res.status(400).json({message: `Sorry Wrong password`})
    }

    const token = signToken(user);
    res.json({ token, user });
})

//Create users results
router.post('/:myId/results/:name', async (req, res) => {
    try {
        //Drop Deck collection..
        const oneCard = await Card.findOne({name: req.params.name})
        const updateUser = await User.findOneAndUpdate(
            //{_id: req.params.myId},
            {_id: req.params.myId},
            {$addToSet: {results: oneCard}}, //req.params.card_id
            {runValidators: true, returnOriginal: false}
        )
        res.json(updateUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/results', async (req, res) => {

})



module.exports = router;