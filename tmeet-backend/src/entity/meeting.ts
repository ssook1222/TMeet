import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";

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
    @JoinTable({
        name: "meeting_user", // table name for the junction table of this relation
        joinColumn: {
            name: "meeting_array",
            referencedColumnName: "meeting_id"
        },
        inverseJoinColumn: {
            name: "user_array",
            referencedColumnName: "id"
        }
    })
    user: User[];
}
