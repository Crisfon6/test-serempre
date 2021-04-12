import { profile } from "console";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Product } from './Product.entity';

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
    picture:Buffer;
    
    
  
    @OneToMany(()=>Product, product=>product.category)
    products:Product[];

}