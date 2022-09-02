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
import {Comment} from  "./comment"

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
    @JoinTable({
        name: "user_meeting", // table name for the junction table of this relation
        joinColumn: {
            name: "id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "meeting_array",
            referencedColumnName: "meeting_id"
        }
    })
    meeting: Meeting[];

    @OneToMany(() => Time, time => time.time_id)
    time_id: Time;

    @OneToMany(() => Comment, comment => comment.user)
    comments: Comment[];
}
