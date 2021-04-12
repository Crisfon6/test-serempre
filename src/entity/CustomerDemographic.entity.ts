
import { Column, Entity, PrimaryGeneratedColumn,ManyToMany, JoinTable, ManyToOne, OneToOne, OneToMany, PrimaryColumn, JoinColumn } from 'typeorm';
import { Customer } from './Customer.entity';
import { Order } from './Order.entity';
import { Product } from './Product.entity';



@Entity("CustomerDemographics")
export class CustomerDemographic{
    
  @PrimaryGeneratedColumn({
      
      name: "CustomerTypeID",
      

  })customerTypeID:number;

  @Column({
      type: "text",
      name: "CustomerDesc",

  })customerDesc:string;
}