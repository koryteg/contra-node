import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity("users")
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    email: string;

    @Column("text")
    password: string;

    @Column({nullable: true})
    firstName: string;

    @Column({nullable: true})
    lastName: string;


}
