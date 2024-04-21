import { Controller, Get, Req, Res, HttpStatus, Logger, Post, LogLevel, Body } from "@nestjs/common";
import { Request, Response } from "express";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async insertFirst(@Req() req: Request, @Res() res: Response) {
    const userdata = req.body;
    try {
      const newUser = await this.userService.insertFirst(userdata);
      if (newUser) {
        return res.status(HttpStatus.CREATED).json(newUser);
      }
      else {
        return res.status(HttpStatus.BAD_REQUEST).send('Registration failed')
      }
    } catch (error) {
      console.error('Error from server', error)
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Interal Server Error');
    }
  }
}
