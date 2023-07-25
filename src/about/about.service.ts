import { Injectable, StreamableFile } from "@nestjs/common";

import { createReadStream } from "fs";
import { join } from "path";

@Injectable()
export class AboutService {
  findAll(): StreamableFile {
    const file = createReadStream(join(process.cwd(), "assets/db.json"));
    return new StreamableFile(file);
  }
}
