import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";
import { UsersService } from "../services/UsersService";

class UsersController {
    async create(request: Request, response: Response): Promise<Response> {
        const { email } = request.body;
        const usersService = new UsersService();

        const user = await usersService.create({email});
        return response.json(user);
    }
}

export { UsersController };
