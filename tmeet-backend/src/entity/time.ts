import {Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {User} from "./user";
import {JoinColumn} from "typeorm";

@Entity()
export class Time{
    @PrimaryGeneratedColumn()
    time_id: number;

    @Column({length: 30})
    email: string;

    @Column('simple-array')
    timetable: string[];

    @OneToOne(() => User, user => user.id)
    @JoinColumn()
    user: User;
}


