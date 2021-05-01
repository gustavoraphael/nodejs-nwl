import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
    JoinColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("Messages")
class Messages {
    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @JoinColumn({name: "user_id"})
    @Column()
    user_id: string;

    @Column()
    text: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) this.id = uuid();
    }
}

export { Messages };
