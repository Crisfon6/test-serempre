import { Request, Response, Router } from "express";
import { getManager, getRepository } from "typeorm";
import { Product } from '../entity/Product.entity';
import { Controller } from "../interfaces/controller.interface";
import { Category } from '../entity/Category.entity';
import { Supplier } from '../entity/Supplier.entity';
import  {saveTestData} from '../helper/saveDocDB';
import { formatData } from '../helper/formatData';

export class ProductController implements Controller{
    public path = '/products';
    public router = Router();
    private productRepository = getRepository(Product);
    private categoryRepository = getRepository(Category);
    private supplierRepository = getRepository(Supplier);
    private connection = getManager();

    constructor(){
        this.initializeRoutes();
    }
    private initializeRoutes(){
        this.router.post(`${this.path}/test`,[],this.createTest);
        this.router.post(`${this.path}/`,[],this.create);
        this.router.get(`${this.path}/`,this.getProducts);
        this.router.get(`${this.path}/search`,this.search);
        this.router.get(`${this.path}/:id`,this.getById);
        this.router.put(`${this.path}/:id`,this.updateProduct);
    }
    private createTest = async(req:Request,res:Response)=>{
        console.log('testdata');
        const saved = await saveTestData(this.connection);
        // const respProducts = formatData([saved]);
        res.json({
            saved
        });
}
    private create = async(req:Request,res:Response)=>{
        const {cat,sup}= req.body;
        const catfound  = await this.categoryRepository.findOne(Number(cat));
        const supfound = await this.supplierRepository.findOne(Number(sup));
        
        const prod = new  Product();
        prod.productName = "Cookies";
        prod.quantityPerUnit = "3";
        prod.unitPrice = 31;
        prod.unitsInStock= 31;
        prod.unitsOnOrder = 13;
        prod.reorderLevel = 2;
        prod.discontinued= 0;           
        
        prod.supplier = supfound;
        prod.category= catfound;
        const prodSaved  = await this.connection.save(prod);
        const respProducts = formatData([prodSaved]);
        res.json({
            prodSaved
        });
    }
       
    
    private getProducts = async(req:Request,res:Response)=>{
        const {perPage,currentPage} = req.query;
        
        const products = await this.productRepository.find({take:Number(perPage),skip:Number(currentPage)*Number(perPage),relations: ["category",
"supplier"]});
const countProducts = await this.productRepository.count();
       const resproduct =  formatData(products);
        res.status(200).json({
            currentPage: currentPage,
            items: resproduct,
            total:countProducts,
            perPage:perPage
        });
    }

    private search = async(req:Request,res:Response)=>{
        const {nameprod,namecat,namesup} = req.query;  

        let sup = undefined;
        let categ = undefined;
        
        const query:any = {};
        if (namesup){
            
            sup = await this.supplierRepository.findOne({
                where: {companyName:namesup}
            });
            query.supplier =sup;
        }
        if (namecat){
            categ = await this.categoryRepository.findOne({
                where:{ categoryName:namecat}
             });
             query.category =categ;     
        }
        if(nameprod){
            query.productName = nameprod;
        }
        console.log(query);
       const products =   await this.productRepository.find({
            where:[query
            ],select:['productID','productName'],relations:['category',
                'supplier']                
        });
        const respProducts = formatData(products);
                res.json({
                    respProducts
        });
    }
    private getById = async(req:Request,res:Response)=>{
        const {id }=req.params;
        const products =   await this.productRepository.findByIds([id],{
            relations:['category',
                'supplier']                
        });
        const respProducts = formatData(products);
        res.json({
            respProducts
});
    }
    private updateProduct = async(req:Request,res:Response)=>{
        const {id} = req.params;
        const {productName,
            quantityPerUnit,
            unitPrice,
            unitsInStock,
            unitsOnOrder,
            reorderLevel,
            discontinued,}= req.body;
        
        const product = await this.productRepository.findOne(id,{relations:['category',
        'supplier']  });
        product.productName = productName ? productName : product.productName;
        product.quantityPerUnit = product ? quantityPerUnit : product.quantityPerUnit;
        product.unitPrice = product ? unitPrice : product.unitPrice;
        product.unitsInStock = product ? unitsInStock : product.unitsInStock;
        product.unitsOnOrder = product ? unitsOnOrder : product.unitsOnOrder;
        product.reorderLevel = product ? reorderLevel : product.reorderLevel;
        product.discontinued = product ? discontinued : product.discontinued;
        
       

        
        const updated = await this.productRepository.save(product);
        res.json({
            updated
        });
        
    }
}