export default {
    timeLog(req, res, next) {
        console.log('Time: ', Date.now())
        next()
    }
};
