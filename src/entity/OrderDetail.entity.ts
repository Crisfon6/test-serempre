
import { Column, Entity, PrimaryGeneratedColumn,ManyToMany, JoinTable, ManyToOne, OneToOne, OneToMany, PrimaryColumn, JoinColumn } from 'typeorm';
import { Order } from './Order.entity';
import { Product } from './Product.entity';


@Entity("OrderDetails")
export class OrderDetail{    
    @Column(
        {
            type: "decimal",
            name: "UnitPrice",
            
        }
    )
    unitPrice:number;

    @Column(
        {
            type: "smallint",
            name: "Quantity",
            
        }
    )
    quantity:number;

    @Column(
        {
            type: "int",
            name: "Discount",
            
        }
    )
    discount:number;
   
        
    @ManyToOne(type =>Order, order => order.orderDetails,{primary:true})
    public order!:Order;

    @ManyToOne(type =>Product, product => product.orderDetails,{primary:true,onDelete:'CASCADE'})
    public product!:Product;
}