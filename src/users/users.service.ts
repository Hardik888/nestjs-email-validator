import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserSchema } from "../models/user.schema";


@Injectable()
export class UserServices {
    constructor(@InjectModel('User') private readonly UserSchema) { }

    async insertFirst(userdata: User): Promise<User | null> {

        const newUser = new this.UserSchema(userdata);
        try {
            const saveduser = await newUser.save();
            return saveduser;
        } catch (error) {
            console.error('Error saving', error.message);
            return null;
        }
    }

}
