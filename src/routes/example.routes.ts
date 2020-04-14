import { Router } from "express";
import { ExampleController } from './../controllers/exampleController';

export default class ExampleRoutes {

    exampleController = new ExampleController();

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }
    routes() {
        this.router.post("/example", this.exampleController.getExample);
        return this.router;
    }
}