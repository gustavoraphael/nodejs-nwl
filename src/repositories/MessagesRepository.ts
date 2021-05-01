import { EntityRepository, Repository } from "typeorm";
import { Messages } from "../entities/Messages";
import { Setting } from "../entities/Settings";

@EntityRepository(Messages)
class MessagesRepository extends Repository<Messages> {

}

export { MessagesRepository}