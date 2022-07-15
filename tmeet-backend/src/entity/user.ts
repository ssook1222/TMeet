import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class user {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 30})
    email: string;

    @Column({length: 8})
    password: string;
}