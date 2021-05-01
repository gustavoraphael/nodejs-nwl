import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("Settings")
class Setting {
    @PrimaryColumn()
    id: string;

    @Column()
    userName: string;

    @Column()
    chat: boolean;

    @UpdateDateColumn()
    update_at: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) this.id = uuid();
    }
}

export { Setting };
