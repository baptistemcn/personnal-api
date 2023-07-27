import { Injectable } from "@nestjs/common";
import { readFileSync } from "fs";
import { join } from "path";

@Injectable()
export class ProjectsService {
  findAll() {
    const filePath = join(process.cwd(), "assets/projects.json");
    const fileContent = readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(fileContent);
    return jsonData;
  }
}
