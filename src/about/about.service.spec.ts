import { Test, TestingModule } from "@nestjs/testing";

import { readFileSync } from "fs";
import { join } from "path";

import { AboutService } from "./about.service";

const mockFilePath = join(process.cwd(), "assets/about.json");
const mockFileContent = readFileSync(mockFilePath, "utf-8");
const mockJsonData = JSON.parse(mockFileContent);

describe("AboutService", () => {
  let service: AboutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AboutService],
    }).compile();

    service = module.get<AboutService>(AboutService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should return a JSON object of experience", () => {
    const result = service.findAll();

    expect(result).toEqual(mockJsonData);
  });
});
