
import { Column, Entity, PrimaryGeneratedColumn,ManyToMany, JoinTable, ManyToOne, OneToOne, OneToMany } from 'typeorm';
import { Order } from './Order.entity';
import { OrderDetails } from './OrderDetails.entity';



@Entity("Shippers")
export class Shipper{
  
    @PrimaryGeneratedColumn({
        name: "ShipperID"
    })shipperID:number;

    
    @Column(
        {
            type: "nvarchar",
            name: "CompanyName",
            length: 40
        }
    )
    companyName:string;


    
    @Column(
        {
            type: "nvarchar",
            name: "Phone",
            length: 24
            
        }
    )
    phone:string;
      
    @OneToMany(()=>Order, order=>order.shipper)
    order:Order[];


    
    
}