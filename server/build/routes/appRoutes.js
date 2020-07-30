"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appController_1 = require("../controllers/appController");
class AppRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', appController_1.appController.list);
        this.router.get('/:id', appController_1.appController.getOne);
        this.router.post('/', appController_1.appController.create);
        this.router.delete('/:id', appController_1.appController.delete);
        this.router.put('/:id', appController_1.appController.put);
    }
}
const appRoutes = new AppRoutes();
exports.default = appRoutes.router;
