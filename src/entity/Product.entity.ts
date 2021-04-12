import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from './Category.entity';
import { OrderDetail } from "./OrderDetail.entity";
import { Supplier } from './Supplier.entity';

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
    unitsInStock:number;

    @Column({
        type: "smallint",
        name: "UnitsOnOrder"
    })
    unitsOnOrder:number;

    @Column({
        type: "smallint",
        name: "ReorderLevel"
    })
    reorderLevel:number;

    @Column({
        type: "tinyint",
        name: "Discontinued"
    })
    discontinued:number;
    
    @OneToMany(()=>OrderDetail,(orderDetails)=> orderDetails.product)
    public orderDetails!:OrderDetail[];


    @ManyToOne(()=>Category, category=>category.products)
    category:Category;


    @ManyToOne(()=>Supplier, supplier=>supplier.products,{onDelete: 'CASCADE'})
    supplier:Supplier;
}