import {
    Column,
    CreateDateColumn,
    Entity, JoinTable, ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Meeting} from "./meeting";
import {Time} from "./time"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 15})
    nickname: string;

    @Column({length: 30})
    email: string;

    @Column({length: 8})
    password: string;

    @Column({length: 15})
    subway: string;

    @ManyToMany(() => Meeting)
    @JoinTable()
    meeting_array: Meeting[];

    @OneToMany(() => Time, time => time.time_id)
    time_id: Time;
}