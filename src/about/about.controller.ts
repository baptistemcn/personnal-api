import { Controller, Get, Header, HttpCode } from "@nestjs/common";
import { AboutService } from "./about.service";

@Controller()
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Get()
  @HttpCode(200)
  @Header("Content-Type", "application/json")
  findAll() {
    return this.aboutService.findAll();
  }
}
