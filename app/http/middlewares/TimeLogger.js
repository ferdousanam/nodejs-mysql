export default {
    handle(req, res, next) {
        console.log('Time: ', Date.now())
        next()
    }
};
