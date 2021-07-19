import kernel from "../http/kernel";
import Router from "../../core/Router";


export default {
    router: Router.getInstance(),
    boot() {
        kernel.handle(this.router)
    }
}
