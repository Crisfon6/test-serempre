import { Request, Response, Router } from "express";
import { getRepository } from "typeorm";
import { Supplier } from "../entity/Supplier.entity";
import { Controller } from "../interfaces/controller.interface";

export class SupplierController implements Controller{
    public path = '/suppliers';
    public router = Router();
    private supRepo = getRepository(Supplier);

    constructor(){
        this.initializeRoutes();
    }
    private initializeRoutes(){
        this.router.get(`${this.path}/:id`,this.getSupByID);
        this.router.get(`${this.path}/:id/products`,this.getSupplier);
        this.router.delete(`${this.path}/:id`,this.delete);
    }
    private getSupByID = async(req:Request,res:Response)=>{
        const {id} = req.params;
        const sup  = await this.supRepo.findOne(id);
        res.json({
            sup
        });
    }
    private getSupplier = async(req:Request,res:Response)=>{
        const { id } = req.params;
        console.log(id);
        const sup = await this.supRepo.findOne(id,{relations: ['products']})
                res.status(200).json({
            sup
        });
    }
    private delete = async(req:Request,res:Response)=>{
        const {id} = req.params;    

        const del = await this.supRepo.delete({supplierID: Number(id)});
res.json({
    del
});
    }
}