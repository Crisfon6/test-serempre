import { Request, Response, Router } from "express";
import { Controller } from "../interfaces/controller.interface";

export class CategoryController implements Controller{
    public path = '/categories';
    public router = Router();

    constructor(){
        this.initializeRoutes();
    }
    private initializeRoutes(){
        this.router.get(`${this.path}/`,this.test);
    }
    private test = async(req:Request,res:Response)=>{
        res.json({
            msg: "good"
        });
    }
}