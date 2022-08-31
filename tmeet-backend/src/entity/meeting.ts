import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";
import {Comment} from "./comment";

@Entity()
export class Meeting{
    @PrimaryGeneratedColumn()
    meeting_id: number;

    //@Column('simple-array')
    //user_array: string[];

    @Column()
    is_regular: boolean;

    @Column('simple-array')
    thead: string[];

    @ManyToMany(() => User)
    @JoinTable()
    user_array: User[];

    @OneToMany(type => Comment, comment => comment.meeting)
    comments: Comment[];
}