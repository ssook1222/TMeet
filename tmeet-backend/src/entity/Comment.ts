import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Meeting} from "./meeting";
import {User} from "./User";

//타입ORM 관계설정
//(meeting_ID, User_id) <-> comment 각각 one to many 관계

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
    user_array: User[];

    // @ManyToOne(type => Board, board => board.comments, {onDelete: 'CASCADE', onUpdate: "CASCADE"})
    // board: Board;
    //{onDelete: 'CASCADE', onUpdate: "CASCADE"} 확인

    //Comment - User: many to one
    //User - Comment: one to many

    //Comment - Meeting: many to one
    //Meeting - Comment: one to many

}