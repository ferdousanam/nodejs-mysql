import {Router as ExpressRouter} from "express";

const Router = (function () {
    let instance;

    function createInstance() {
        return new ExpressRouter();
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

export default Router;
