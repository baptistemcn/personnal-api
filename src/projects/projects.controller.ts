import { Controller, Get } from "@nestjs/common";
import { ProjectsService } from "./projects.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Projects")
@Controller()
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  findAll() {
    return this.projectsService.findAll();
  }
}
