import { Router } from 'express';

import { appController } from '../controllers/appController';


class AppRoutes{
    router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', appController.list);
        this.router.get('/:id', appController.getOne);
        this.router.post('/',appController.create);
        this.router.delete('/:id', appController.delete);
        this.router.put('/:id', appController.put);
    }
}

const appRoutes = new AppRoutes();
export default appRoutes.router;