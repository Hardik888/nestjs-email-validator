import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserSchema } from '../models/user.schema';
import * as argon2 from 'argon2';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class UserServices {
    constructor(@InjectModel('User') private readonly UserSchema,
        private readonly configService: ConfigService,) { }

    async insertFirst(userdata: User): Promise<User | null> {
        try {

            const encodedpParams = new URLSearchParams();
            encodedpParams.set('email', userdata.email);

            const options = {
                method: 'POST',
                url: this.configService.get<string>('APIURL'),
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'X-RapidAPI-Key': this.configService.get<string>('APIKEY'),
                    'X-RapidAPI-Host': this.configService.get<string>('APIURL'),
                },
                data: encodedpParams,
            };


            const response = await axios.request(options);
            const data = await response.data;
            console.log('the data is', data);
            if (!data.valid) {
                return null;
            }
            const hashedPassword = await argon2.hash(userdata.password);
            userdata.password = hashedPassword;
            const newUser = new this.UserSchema(userdata);

            const saveduser = await newUser.save();
            return saveduser;
        } catch (error) {
            console.error('Error saving', error.message);
            return null;
        }
    }
}

