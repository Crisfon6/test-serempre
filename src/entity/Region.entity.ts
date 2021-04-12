import { profile } from "console";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Territory } from "./Territory.entity";

@Entity("Region")
export class Region{
    @PrimaryGeneratedColumn({name:"RegionID"})
    regionID:number;

    @Column({
        type:"nchar",
        length: 50,
        name: "RegionDescription"
    })regionDescription:string;
  
    @OneToMany(()=>Territory, territory=>territory.region)
    territories:Territory[];

}