import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Meeting} from "./meeting";
import {User} from "./user";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    content: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @ManyToOne(() => Meeting, meeting => meeting.meeting_id)
    meeting_id: Meeting;

    @ManyToOne(() => User, user => user.id)
    user_id: User;

    @ManyToOne(() => User, user => user.comments)
    user: User;

    @ManyToOne(() => Meeting, meeting => meeting.comments)
    meeting: Meeting;
}