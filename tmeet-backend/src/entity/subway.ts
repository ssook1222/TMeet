import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Subway {
    @PrimaryGeneratedColumn()
    subway_id: number;

    @Column({length: 15})
    subway_name: string;

    @Column("double")
    lat: number;

    @Column("double")
    lng: number;
}