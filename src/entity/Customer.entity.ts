
import { Column, Entity, PrimaryGeneratedColumn,ManyToMany, JoinTable, ManyToOne, OneToOne, OneToMany } from 'typeorm';

import { Order } from './Order.entity';
import { CustomerDemographics } from './CustomerDemographics.entity';



@Entity("Customers")
export class Customer{
  
   @PrimaryGeneratedColumn({
       name: "CustomerID"
   })customerID:number;

    @Column(
        {
            type: "nvarchar",
            name: "CompanyName",
            length: 40
        }
    )
    companyName:string;
    
    @Column({
        type: "nvarchar",
        name: "ContactName",
        length: 30
    })
    contactName:string;

    @Column({
        type: "nvarchar",
        name: "CompanyTitle",
        length: 30
    })
    contactTitle:string;

    @Column(
        {
            type: "nvarchar",
            name: "Address",
            length: 60
        }
    )
    address:string;
    
    @Column(
        {
            type: "nvarchar",
            name: "City",
            length: 15
        }
    )
    city:string;

    @Column(
        {
            type: "nvarchar",
            name: "Region",
            length: 15
        }
    )
    region:string;

    @Column(
        {
            type: "nvarchar",
            name: "PostalCode",
            length: 10
        }
    )
    postalCode:string;
    
    @Column( {
        type: "nvarchar",
        name: "Country",
        length: 15
    })
    country:string;

    @Column( {
        type: "nvarchar",
        name: "Phone",
        length: 24
    })
    phone:string;

    @Column(
        {
            type: "nvarchar",
            name: "Fax",
            length: 24
        }
    )
    fax:string;


    @ManyToOne(()=>Order, Order=>Order.customer)
    order:Order;

    @ManyToMany(type =>CustomerDemographics)
    @JoinTable()
    customerDemographics:CustomerDemographics[];
}