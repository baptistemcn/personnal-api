import { Injectable } from "@nestjs/common";

import { readFileSync } from "fs";
import { join } from "path";

@Injectable()
export class AboutService {
  french = join(process.cwd(), "assets/fr.about.json");
  english = join(process.cwd(), "assets/en.about.json");

  findAll(language: string) {
    const languages: { [key: string]: string } = {
      fr: this.french,
      en: this.english,
    };

    const filePath = languages[language] || this.english;
    const fileContent = readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(fileContent);
    return jsonData;
  }
}
