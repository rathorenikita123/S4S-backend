import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AppDataSource } from "../../ormconfig";

@Entity()
export class user {
    @PrimaryGeneratedColumn() id: number;

    @CreateDateColumn({ type: 'timestamp' }) created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' }) updated_at: Date;
    
    @Column({ nullable: false})
    name: string;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column()
    phone: string;

    @Column()
    profile_image: string;

    @Column({default: 'enabled'})
    status : 'enable' | 'disable';
}

