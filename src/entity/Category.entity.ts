import { profile } from "console";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Product } from './Products.entity';

@Entity("Categories")
export class Category{
    @PrimaryGeneratedColumn({
        type: "int",
        name: "CategoryID"
    })
    categoryID:number;

    @Column({
        type: "nvarchar",
        name: "CategoryName",
        length: 15
    })
    categoryName:string;
    
    @Column({
        type: "text",
        name: "Description",        
    })
    description:string;

    @Column({
        type: "image",
        name: "Picture",        
    })
    picture:any;
    
    @ManyToOne(()=>Product, product=>product.category)
    product:Product;
  
}