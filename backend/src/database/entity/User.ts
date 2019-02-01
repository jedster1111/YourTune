import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export interface UserInitData {
  username: string;
  password: string;
  secretKey: string;
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column()
  isLive!: boolean;

  @Column({ select: false })
  secretKey!: string;

  @Column({ select: false })
  password!: string;

  constructor(data: UserInitData) {
    // Need this check as typeorm runs the constructor on db init
    if (data) {
      this.username = data.username;
      this.secretKey = data.secretKey;
      this.isLive = false;
      this.password = data.password;
    }
  }
}
