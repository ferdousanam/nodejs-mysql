import {Router} from "express";
import TimeLogger from "../app/http/middlewares/TimeLogger";
import HomeController from "../app/http/controllers/HomeController";
import ProductController from "../app/http/controllers/ProductController";

const router = Router()

// middleware that is specific to this router
router.use(TimeLogger.timeLog)

router.get('/', HomeController.index)
router.get('/about', HomeController.about)
router.get('/products', ProductController.index)
router.get('/products/:id', ProductController.show)

// module.exports = router
export default router;
