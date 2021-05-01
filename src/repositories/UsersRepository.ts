import { EntityRepository, Repository } from "typeorm";
import { Setting } from "../entities/Settings";
import { Users } from "../entities/Users";

@EntityRepository(Users)
class UsersRepository extends Repository<Users> {
  
}

export { UsersRepository };
