import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
    async create(request: Request, response: Response) {
        const { chat, userName } = request.body;

        const settingsService = new SettingsService();

        try {
            const settings = await settingsService.create({
                chat,
                userName,
            });
            return response.json(settings);
        } catch (error) {
            return response.status(400).json({
                message: error.message,
            });
        }
    }
}

export { SettingsController };
