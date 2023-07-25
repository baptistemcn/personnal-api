import { Controller, Get } from "@nestjs/common";
import { AboutService } from "./about.service";

@Controller()
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Get()
  findAll() {
    return this.aboutService.findAll();
  }
}
