import { Controller, Get, Req, Res, HttpStatus, Logger, Post, LogLevel, Body } from "@nestjs/common";
import { Request, Response } from "express";
import { UserServices } from "./users.service";
type userdata = {

  _id:string,
  username:string,
  password:string,
  email:string,
  bio:string,
  profilepicture: string,
  about:string,
}
@Controller('users')



export class UsersController {

  constructor(private readonly userService: UserServices) { }


  @Post()
  async findById(@Req() @Body() userdata:userdata, req: Request, @Res() res: Response) {
    try {

      const users = await this.userService.findById(userdata);


      return res.status(HttpStatus.OK).json(users);
    } catch {
      res.status(HttpStatus.BAD_GATEWAY).send();
    }
  }
}