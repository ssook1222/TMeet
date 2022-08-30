import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";
import {Comment} from "./Comment";

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

    @OneToMany(() => User, user => user.id)
    user_array: User[];

    @OneToMany(() => Comment, comment => comment.id)
    comment_array: Comment[];
}