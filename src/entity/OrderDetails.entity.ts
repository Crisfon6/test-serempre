
import { Column, Entity, PrimaryGeneratedColumn,ManyToMany, JoinTable, ManyToOne, OneToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Order } from './Order.entity';
import { Product } from './Products.entity';


@Entity("OrderDetails")
export class OrderDetails{    
    @Column(
        {
            type: "decimal",
            name: "UnitPrice",
            
        }
    )
    unitPrice:string;

    @Column(
        {
            type: "smallint",
            name: "Quantity",
            
        }
    )
    quantity:number;

    @Column(
        {
            type: "real",
            name: "Discount",
            
        }
    )
    discount:string;
    @PrimaryColumn(
        {
            type: "int",
            name: "ProductID"
        }
    )
    @OneToMany(()=>Product, product=>product.orderDetails,{primary:true})
    product:Product;

    @PrimaryColumn(
        {
            type: "int",
            name: "OrderID"
        }
    )    
    @OneToMany(()=>Order, order=>order.orderDetails,{primary:true})
    order:Order;
    
    
}