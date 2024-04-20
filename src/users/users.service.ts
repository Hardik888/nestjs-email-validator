import { Injectable } from "@nestjs/common";
;

@Injectable()
export class UserServices {

    async findById(userdata:any) {
        try {
            const response = await fetch('http://localhost:8000/users');
            const responsedata = await response.json();

            const user = [...responsedata,userdata];


            return user;
        } catch (error) {

            throw error;
        }
    }
}
