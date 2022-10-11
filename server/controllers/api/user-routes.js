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
        }).lean()
        if (!getUser){
            res.status(404).json({message: `No user found with this id`})
        }
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

//Create users results       /:myId/results/:name
router.post('/results', authMiddleware, async (req, res) => {
    try {
        //console.log(req.user)
        console.log(req.body.body)
        const names = JSON.parse(req.body.body)
        const cards = await Card.find({ 'name': { $in: names } }).lean();
        // const cards = await Card.find(
        //     {"name": { $in: [
        //         req.body[0],
        //         req.body[1],
        //         req.body[2],
        //     ]
        // }})
        
        if(!cards){
            res.status(404).json({message: `Could not find cards`})
        }
        const updateUser = await User.findOneAndUpdate(
            //{_id: req.params.myId},
            {_id: req.user._id},
            {$addToSet: {results: [cards]}}, //req.params.card_id
            {runValidators: true, returnOriginal: false}
        )
        if (!updateUser){
            res.status(404).json({message: `No user with this id.`})
        }
        res.json(updateUser)
    } catch (error) {
        res.status(500).json(error)
    }
})





module.exports = router;