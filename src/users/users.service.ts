import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { user } from "./schemas/user.schema";
import { Model } from "mongoose";

@Injectable()

export class usersService {
    constructor(@InjectModel(user.name) private userModel: Model<user>) {}

    async createUser () {};
    async getUsers () {};
    async getUserById () {};
    async deleteUser() {};
}