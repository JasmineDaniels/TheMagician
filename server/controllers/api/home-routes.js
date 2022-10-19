const router = require('express').Router();

const { Post } = require("../../models");

router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.find({}).populate({ path: 'reading', populate: { path: 'results'} }).sort({ createdAt: -1}) 
        res.json(allPosts)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router