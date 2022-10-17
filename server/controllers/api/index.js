const router = require('express').Router();
const homeRoutes = require('./home-routes');
const cardRoutes = require('./card-routes');
const userRoutes = require('./user-routes');
router.use('/home', homeRoutes)
router.use('/cards', cardRoutes)
router.use('/users', userRoutes)


module.exports = router;
