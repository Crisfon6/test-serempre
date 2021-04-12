import { Request, Response, Router } from "express";
import { Category } from "../entity/Category.entity";
import { Controller } from "../interfaces/controller.interface";
import { getManager, getRepository } from 'typeorm';

export class CategoryController implements Controller{
    public path = '/categories';
    public router = Router();
    private connection = getManager();
    private categoryRepo = getRepository(Category);

    constructor(){
        this.initializeRoutes();
    }
    private initializeRoutes(){
        this.router.get(`${this.path}/:id/products`,this.getCategory);
    }
    private getCategory = async(req:Request,res:Response)=>{
        const { id } = req.params;
        console.log(id);
        const category = await this.categoryRepo.findOne(id,{relations: ['products']})
        

        
        res.status(200).json({
            category
        });
    }
}