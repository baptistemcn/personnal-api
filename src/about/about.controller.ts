import { Controller, Get, StreamableFile } from "@nestjs/common";
import { AboutService } from "./about.service";
import { createReadStream } from "fs";
import { join } from "path";

@Controller()
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Get()
  findAll() {
    return this.aboutService.findAll();
  }

  @Get("test")
  getFile(): StreamableFile {
    const file = createReadStream(join(process.cwd(), "assets/db.json"));
    return new StreamableFile(file);
  }
}
