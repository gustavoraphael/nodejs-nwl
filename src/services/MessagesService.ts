import { getCustomRepository, Repository } from "typeorm";
import { Messages } from "../entities/Messages";
import { MessagesRepository } from "../repositories/MessagesRepository";

interface IMessagesCreate {
    admin_id?: string;
    user_id: string;
    text: string;
}

class MessagesService {
    private messagesRepository: Repository<Messages>;

    constructor(){
        this.messagesRepository = getCustomRepository(MessagesRepository);
    }
    async create({ admin_id, text, user_id }: IMessagesCreate) {
        const messages = this.messagesRepository.create({
            admin_id,
            user_id,
            text,
        });

        await this.messagesRepository.save(messages);
        return messages;
    }

    async listByUser(user_id: string) {
        const messages = this.messagesRepository.find({
            where: { user_id },
            relations: ["users"],
        });
        return messages;
    }
}

export { MessagesService };
