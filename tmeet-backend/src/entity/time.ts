import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {User} from "./user";

@Entity()
export class Time{
    @PrimaryGeneratedColumn()
    time_id: number;

    @Column({length: 30})
    email: string;

    @Column('simple-array')
    timetable: string[];

    @ManyToOne(() => User, user => user.id)
    user_array: User[];
}
