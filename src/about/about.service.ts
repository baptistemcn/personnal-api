import { Injectable } from "@nestjs/common";

import { readFileSync } from "fs";
import { join } from "path";

@Injectable()
export class AboutService {
  findAll() {
    const filePath = join(process.cwd(), "assets/about.json");
    const fileContent = readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(fileContent);
    return jsonData;
  }
}
