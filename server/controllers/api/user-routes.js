const router = require('express').Router();
const { User, Card } = require("../../models");
const { signToken, authMiddleware } = require('../../utils/auth')

router.get('/', async (req, res) => {
    try {
        const allUsers = await User.find({}).lean() 
        res.json(allUsers)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/me', authMiddleware, async (req, res) => {
    try {
        console.log(req.user)
        const getUser = await User.findOne({
            $or: [{ _id: req.user._id }, { username: req.user.username }]
        })
        res.json(getUser)
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
    try {
        console.log(req.body)
        const user = await User.findOne({ $or: [{username: req.body.username}, {email: req.body.email}]})
        if (!user){
            res.status(400).json({ message: `No user with this email: ${req.body.email}`})
        }
        //correct pw
        const validPassword = await user.checkPW(req.body.password)
        if (!validPassword){
            res.status(400).json({message: `Sorry Wrong password`})
            return
        }

        const token = signToken(user);
        res.json({ token, user });
    } catch (error) {
        res.status(500).json({message: `Internal server error`})
    }
})

//Create users results = /portal endpoint      /:myId/results/:name
router.post('/results/:name', authMiddleware, async (req, res) => {
    try {
        console.log(req.user)
        const { user } = authMiddleware
        const oneCard = await Card.findOne({name: req.params.name})
        const updateUser = await User.findOneAndUpdate(
            //{_id: req.params.myId},
            {_id: user._id},
            {$addToSet: {results: oneCard}}, //req.params.card_id
            {runValidators: true, returnOriginal: false}
        )
        res.json(updateUser)
    } catch (error) {
        res.status(500).json(error)
    }
})





module.exports = router;