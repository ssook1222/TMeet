import {Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {User} from "./user";

@Entity()
export class Time{
    @PrimaryGeneratedColumn()
    time_id: number;

    @Column({length: 30})
    email: string;

    @Column('simple-array')
    timetable: string[];

    @OneToOne(() => User, user => user.id)
    user: User;
}


