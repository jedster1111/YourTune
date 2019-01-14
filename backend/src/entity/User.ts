import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column({ select: false })
  secretKey!: string;

  @Column()
  isLive!: boolean;

  constructor(username: string, secretKey: string) {
    this.username = username;
    this.secretKey = secretKey;
    this.isLive = false;
  }
}
