import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from './Category.entity';
import { OrderDetails } from "./OrderDetails.entity";
import { Supplier } from './Suppliers.entity';

@Entity("Products")
export class Product{
    @PrimaryGeneratedColumn({
        type: "int",
        name: "ProductID"
    })
    productID:number;

    @Column({
        type: "nvarchar",
        name: "ProductName",
        length: 40
    })
    productName:string;
    
    @Column({
        type: "nvarchar",
        name: "QuantityPerUnit",     
        length: 20   
    })
    quantityPerUnit:string;

    @Column({
        type: "decimal",
        name: "UnitPrice",        

    })
    unitPrice:number;

    @Column({
        type: "smallint",
        name: "UnitsInStock"
    })
    unitsInStock:Number;

    @Column({
        type: "smallint",
        name: "ReorderLevel"
    })
    reorderLevel:Number;

    @Column({
        type: "tinyint",
        name: "Discontinued"
    })
    discontinued:Number;

  
    @ManyToOne(()=>OrderDetails, orderDetails=>orderDetails.product)
    orderDetails:OrderDetails;

    
    @OneToMany(()=>Category, category=>category.product)
    category:Category[];

    @OneToMany(()=>Supplier, supplier=>supplier.product)
    supplier:Supplier[];
}