import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Meeting} from "./meeting";
import {Time} from "./time"
import {Comment} from "./comment";

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

    @ManyToOne(() => Meeting, meeting => meeting.meeting_id)
    meeting_id: Meeting;

    @OneToMany(() => Time, time => time.time_id)
    time_id: Time;

    @OneToMany(() => Comment, comment => comment.id)
    comment_array: Comment[];

}