import { IsNumber, IsString } from 'class-validator';
import { Category } from '../entity/Category.entity';
import { Supplier } from '../entity/Supplier.entity';
export class ProductDto{
    constructor(
        productName:string,
        quantityPerUnit:string,
        unitPrice:number,
        unitsInStock:number,
        unitsOnOrder:number,
        reorderLevel:number,
        discontinued:number,
        supplier:number,
        category:number,
    ){
        this.productName = productName;
        this.quantityPerUnit = quantityPerUnit;
        this.unitPrice = unitPrice;
        this.unitsInStock = unitsInStock;
        this.unitsOnOrder = unitsOnOrder;
        this.reorderLevel = reorderLevel;
        this.discontinued = discontinued;
        this.supplier = supplier;
        this.category = category;
    }
    @IsString()
    productName :string;

    @IsString()    
    quantityPerUnit:string;
    
    @IsNumber()
    unitPrice:number;
    
    @IsNumber()
    unitsInStock:number;
    
    @IsNumber()
    unitsOnOrder:number;
    
    @IsNumber()
    reorderLevel:number;
    
    @IsNumber() 
    discontinued:number;
    
    @IsNumber()
    supplier:number;
    
    @IsNumber()
    category:number;
}