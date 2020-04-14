
import { NextFunction, Request, Response } from "express";
import jwt = require('jsonwebtoken');

export class Autenticacion {

    VerificaToken(req: Request, res: Response, next: NextFunction) {

        const token: string = req.headers.authorization || "";
        let tokenFinal: string = '';
        if (token.indexOf('Bearer') !== -1) {
            let a = token.split(' ');
            tokenFinal = a[1];
        } else {
            tokenFinal = token;
        }
        const SEED: any = process.env.DEV_SEED;
        jwt.verify(tokenFinal, SEED, (err: any) => {
            if (err) {
                res.status(401).json({ mesanje: "No autorizado", error: err });
                return;
            }
            next();
        });
    }

}