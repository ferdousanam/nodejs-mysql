import Router from "../core/Router";
import HomeController from "../app/http/controllers/HomeController";
import ProductController from "../app/http/controllers/ProductController";
import RouteServiceProvider from "../app/providers/RouteServiceProvider";

RouteServiceProvider.boot()
const router = Router.getInstance()
router.get('/', HomeController.index)
router.get('/about', HomeController.about)
router.get('/products', ProductController.index)
router.get('/products/:id', ProductController.show)

// module.exports = router
export default router;
