import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { HelloDto } from './dtos/hello.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // validation example
  @Post()
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  postHello(@Body() bodyParams: HelloDto) {
    return bodyParams;
  }
}
