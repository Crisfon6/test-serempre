import { Request, Response, Router } from "express";
import { Controller } from "../interfaces/controller.interface";

export class ProductController implements Controller{
    public path = '/products';
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