import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";
interface ISettingsCreate {
    chat: boolean;
    userName: string;
}

class SettingsService {
    async create({ chat, userName }: ISettingsCreate) {
        const settingsRepository = getCustomRepository(SettingsRepository);

        const userAlreadyExists = await settingsRepository.findOne({
            userName,
        });

        if (userAlreadyExists) {
            throw new Error("User already exits");
        }

        const settings = settingsRepository.create({
            chat,
            userName,
        });

        await settingsRepository.save(settings);
        return settings;
    }
}

export { SettingsService };
