const router = require('express').Router();
const { User, Card, Post } = require("../../models");
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
        const getUser = await User.findOne({
            $or: [{ _id: req.user._id }, { username: req.user.username }]
        }).populate({path: "results",  options: {sort: {createdAt: -1}}})
        if (!getUser){
            res.status(404).json({message: `No user found with this id`})
        }
        res.json(getUser)
    } catch (error) {
        res.status(500).json(error)
    }
})


//Create A Post
router.post('/post', authMiddleware, async (req, res) => {
    try {
        console.log(req.user)
        console.log(req.body);
        // const [ results ] = req.body.userResults
        // const post = {
        //     user_id: req.user._id,
        //     username: req.user.username,
        //     message: req.body.message,
            
        // }
        const newPost = await Post.create(req.body);
        const updateUser = await User.findOneAndUpdate(
            {_id: req.user._id},
            {$addToSet: {posts: newPost}}, // $push
            {runValidators: true, returnOriginal: false}
        ).populate('posts')

        if (!updateUser){
            res.status(404).json({message: `Could not create post at this time.`})
        }

        res.json(updateUser)
    } catch (error) {
        console.log(error)
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
// router.post('/results', authMiddleware, async (req, res) => {
//     try {
//         //console.log(req.user)
//         console.log(req.body.body)
//         const names = JSON.parse(req.body.body)
//         const cards = await Card.find({ 'name': { $in: names } }).lean();
//         if(!cards){
//             res.status(404).json({message: `Could not find cards`})
//         }
//         const updateUser = await User.findOneAndUpdate(
//             //{_id: req.params.myId},
//             {_id: req.user._id},
//             {$addToSet: {results: cards}}, //req.params.card_id
//             {runValidators: true, returnOriginal: false}
//         )
//         if (!updateUser){
//             res.status(404).json({message: `No user with this id.`})
//         }
//         res.status(200).json({message: `successfully added cards to users result-set`})
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

router.post('/results', authMiddleware, async (req, res) => {
    try {
        
        const data = JSON.parse(req.body.body)
        console.log(data)
        //const [ _id, ...rest ] = names
        const [ one, two, three ] = data
        const first = one._id
        const second = two._id
        const third = three._id
        //const resultID = data._id
        
        const updateUser = await User.findOneAndUpdate(
            //{_id: req.params.myId},
            {_id: req.user._id},
            {$addToSet: {results: [{_id: first}, {_id: second},{ _id: third}]}}, //req.params.card_id
            //{$addToSet: {results: { _id: resultID}}}, //req.params.card_id
            {runValidators: true, returnOriginal: false}
        )
        if (!updateUser){
            res.status(404).json({message: `No user with this id.`})
        }
        res.status(200).json({message: `successfully added card to users result-set`})
    } catch (error) {
        res.status(500).json(error)
    }
})




module.exports = router;