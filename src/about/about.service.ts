import { Injectable } from "@nestjs/common";

import { readFileSync } from "fs";
import { join } from "path";

@Injectable()
export class AboutService {
  findAll(lang: string) {
    const filePathFR = join(process.cwd(), "assets/fr.about.json");
    const filePathEN = join(process.cwd(), "assets/en.about.json");
    const filePath = lang === "fr" ? filePathFR : filePathEN;
    const fileContent = readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(fileContent);
    return jsonData;
  }
}
