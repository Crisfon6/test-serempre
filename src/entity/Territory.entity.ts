import { profile } from "console";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';



import { Region } from "./Region.entity";

@Entity("Territories")
export class Territory{
  
    @PrimaryGeneratedColumn({
        type: "int",
        name: "TerritoryID",        
    })territoryID:number;
    
    @ManyToOne(()=>Region, region=>region.territories)
    region:Region;

}