
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany,  } from 'typeorm';
import { Product } from './Product.entity';

@Entity("Suppliers")
export class Supplier{
    @PrimaryGeneratedColumn({
        type: "int",
        name: "SupplierID"
    })
    supplierID:number;

    @Column({
        type: "nvarchar",
        name: "CompanyName",
        length: 40
    })
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
    postalCode:number;
    
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


    @Column( {
        type: "text",
        name: "HomePage",        
    })
    homePage:string;

    @OneToMany(()=>Product, product=>product.supplier,{onDelete: 'CASCADE'})
    products:Product[];
}