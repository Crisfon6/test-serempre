
import { Column, Entity, PrimaryGeneratedColumn,ManyToMany, JoinTable, ManyToOne, OneToOne, OneToMany } from 'typeorm';
import { Customer } from './Customer.entity';
import { OrderDetail } from './OrderDetail.entity';
import { Product } from './Product.entity';
import { Shipper } from './Shipper.entity';
import { Employee } from './Employee.entity';


@Entity("Orders")
export class Order{
    @PrimaryGeneratedColumn({
        type:"int",
        name: "OrderID"
    })orderID:number;
    
    
    @Column(
        {
            type: "datetime",
            name: "OrderDate",
            
        }
    )
    orderDate:Date;

    @Column(
        {
            type: "datetime",
            name: "RequiredDate",
            
        }
    )
    requiredDate:Date;
    
    @Column(
        {
            type: "datetime",
            name: "ShippedDate",
            
        }
    )
    shippedDate:Date;

    @Column(
        {
            type: "decimal",
            name: "Freight",            
        }
    )
    freight:number;

    @Column(
        {
            type: "nvarchar",
            name: "ShipName",            
            length: 40
        }
    )
    shipName:string;

    @Column(
        {
            type: "nvarchar",
            name: "ShipAddress",            
            length: 60
        }
    )
    shipAddress:string;

    @Column(
        {
            type: "nvarchar",
            name: "ShipCity",            
            length: 15
        }
    )
    shipCity:string;

    @Column(
        {
            type: "nvarchar",
            name: "ShipRegion",            
            length: 15
        }
    )
    shipRegion:string;

    @Column(
        {
            type: "nvarchar",
            name: "ShipPostalCode",            
            length: 10
        }
    )
    shipPostalCode:string;
    
    @Column(
        {
            type: "nvarchar",
            name: "ShipCountry",            
            length: 15
        }
    )
    shipCountry:string;


    @OneToMany(()=>OrderDetail,(orderDetails)=> orderDetails.order)
    public orderDetails!:OrderDetail[];
  

    @ManyToOne(()=>Shipper, shipper=>shipper.orders)
    shipper:Shipper;
    
    @ManyToOne(()=>Customer, customer=>customer.orders)
    customer:Shipper;
    
    @ManyToOne(()=>Employee, employees=>employees.orders)
    employee:Employee;
}