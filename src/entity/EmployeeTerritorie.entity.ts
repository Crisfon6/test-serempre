import { profile } from "console";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Product } from './Products.entity';
import { Employees } from './Employees.entity';
import { Territory } from "./Territory.entity";

@Entity("EmployeeTerritories")
export class EmployeeTerritorie{
    @PrimaryColumn({
        type:"int"
    })
    @OneToMany(()=>Employees, employees=>employees.employeeTerritorie,{primary:true})
    employee:Employees;
    
    @PrimaryColumn({
        type:"int"
    })
    @OneToMany(()=>Territory, territory=>territory.employeeTerritorie,{primary:true})
    territory:Territory;
}