import {Router} from "express";

const router = Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
// define the home page route
router.get('/', function (req, res) {
    res.send('Home Page')
})
// define the about route
router.get('/about', function (req, res) {
    res.send('About Us')
})

// module.exports = router
export default router;
