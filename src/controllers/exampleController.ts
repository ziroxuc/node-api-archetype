import { Request, Response } from "express";

export class ExampleController {

    public async getExample(req: Request, res: Response) {
        
        try {
            const data = req.body;
            res.status(200).json({ data: data });
        } catch (error) {
            return res.status(500).json("Error");
        }
    }
}