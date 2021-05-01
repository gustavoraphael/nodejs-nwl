import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Messages1619875707315 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "messages",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "admin_id",
                        type: "uuid"
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                        default: true
                    },
                    {
                        name: "text",
                        type: "varchar",                        
                    },
                    {
                        name: "create_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKuser",
                        referencedColumnNames: ["id"],
                        referencedTableName: "users",
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("messages");
    }

}
