import TimeLogger from "./middlewares/TimeLogger";

export default {
    webMiddlewares: [
        TimeLogger
    ],
    handle(router) {
        this.webMiddlewares.forEach((middleware) => {
            router.use(middleware.handle)
        })
    }
}
