import { profile } from "console";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { EmployeeTerritorie } from "./EmployeeTerritorie.entity";
import { Product } from './Products.entity';



@Entity("Employees")
export class Employees{
    @PrimaryGeneratedColumn({
        type: "int",
        name: "EmployeeID"
    })
    employeeID:number;

    @Column({
        type: "nvarchar",
        name: "LastName",
        length: 20
    })
    lastName:string;
    
    @Column({
        type: "nvarchar",
        name: "FirstName",   
        length: 10     
    })
    firstName:string;

    @Column({
        type: "nvarchar",
        name: "Title",   
        length: 30    
    })
    title:string;

    
    @Column({
        type: "nvarchar",
        name: "TitleOfCourtesy",   
        length: 25
    })
    titleOfCourtesy:string;

    @Column({
        type: "datetime",
        name: "BirthDate",   
        
    })
    birthDate:string;
    
    @Column({
        type: "datetime",
        name: "HireDate",   
        
    })
    hireDate:string;

    @Column({
        type: "nvarchar",
        name: "Address", 
        length: 60  
        
    })
    Address:string;
      
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

    @Column({
        type:    "nvarchar",
        name: "HomePhone",
        length: 24
    })homePhone:string;

    
    @Column({
        type:    "nvarchar",
        name: "Extension",
        
    })extension:string;

    @Column({
        type:    "image",
        name: "Photo",
        
    })photo:any;

    @Column({
        type:    "text",
        name: "Notes",
        
    })notes:string;

    @Column({
        type:    "nvarchar",
        name: "PhotoPath",
        length: 255        
    })photoPath:string;

    @ManyToOne(()=>Employees, employee=>employee.reportsTo)//ojito
    reportsTo:Employees;

    
    @ManyToOne(()=>EmployeeTerritorie, employeeTerritorie=>employeeTerritorie.employee)//ojito
    employeeTerritorie:EmployeeTerritorie;
}