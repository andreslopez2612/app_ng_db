import { Request, Response } from 'express';

import db  from '../database';

class AppController {
    public async list (req: Request,res: Response){

        await db.query('SELECT * FROM citizen', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });        
    }

    public async getOne (req: Request,res: Response){

        const { id } = req.params;

        await db.query('SELECT * FROM citizen WHERE id = ?', [id], function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }
    
    public async create (req: Request,res: Response):Promise<void>{
        await db.query('INSERT INTO citizen set ?',[req.body]);
        res.json({text: 'User was created'});
    }

    public async delete (req: Request,res: Response):Promise<void>{
        const { id } = req.params;
        await db.query('DELETE FROM citizen WHERE id = ?', [id]);

        res.json({message: "User was deleted"});
    }

    public async put (req: Request,res: Response):Promise<void>{
        const { id } = req.params;

        await db.query('UPDATE citizen set ? WHERE id = ?',[req.body, id], function (err, result, fields) {
            if (err) throw err;
            // res.json(result);
        });
        res.json({message: "Game was uptated"});
    }
}

export const appController = new AppController();