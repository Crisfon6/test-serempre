import { profile } from "console";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Product } from './Products.entity';
import { Employees } from './Employees.entity';
import { EmployeeTerritorie } from './EmployeeTerritorie.entity';
import { Region } from "./Region.entity";

@Entity("Territories")
export class Territory{
  
    @PrimaryGeneratedColumn({
        type: "int",
        name: "TerritoryID",        
    })territoryID:number;
    
    @OneToMany(()=>Region, region=>region.territory)
    region:Region[];

    @ManyToOne(()=>EmployeeTerritorie, employeeTerritorie=>employeeTerritorie.territory)
    employeeTerritorie:EmployeeTerritorie;
}