import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Time{
    @PrimaryGeneratedColumn()
    time_id: number;

    @Column({length: 30})
    email: string;

    @Column('simple-array')
    timetable: string[];
}
