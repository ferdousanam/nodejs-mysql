import {Router} from "express";
import TimeLogger from "../app/http/middlewares/TimeLogger";
import HomeController from "../app/http/controllers/HomeController";

const router = Router()

// middleware that is specific to this router
router.use(TimeLogger.timeLog)

router.get('/', HomeController.index)
router.get('/about', HomeController.about)

// module.exports = router
export default router;
