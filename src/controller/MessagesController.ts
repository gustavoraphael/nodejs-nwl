import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";
import { MessagesService } from "../services/MessagesService";
import { SettingsService } from "../services/SettingsService";

class MessagesController {
    async create(request: Request, response: Response) {
        const { admin_id, user_id, text } = request.body;

        const messagesService = new MessagesService();

        try {
            const messages = await messagesService.create({
                admin_id,
                user_id,
                text,
            });
            return response.json(messages);
        } catch (error) {
            return response.status(400).json({
                message: error.message,
            });
        }
    }

    async showByUser(request: Request, response: Response) {
        const { id } = request.params;

        const messagesService = new MessagesService();

        const list = await messagesService.listByUser(id);

        return list;
    }
}

export { MessagesController };
