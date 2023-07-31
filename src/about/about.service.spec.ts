import { Test, TestingModule } from "@nestjs/testing";

import { readFileSync } from "fs";
import { join } from "path";

import { AboutService } from "./about.service";
import { PrismaService } from "../prisma/prisma.service";

const mockFilePath = join(process.cwd(), "assets/fr.about.json");
const mockFileContent = readFileSync(mockFilePath, "utf-8");
const mockJsonData = JSON.parse(mockFileContent);

const mockLang = "fr";

describe("AboutService", () => {
  let service: AboutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AboutService, PrismaService],
    }).compile();

    service = module.get<AboutService>(AboutService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  xit("should return a JSON object of experience", () => {
    const result = service.findAll(mockLang);

    expect(result).toEqual(mockJsonData);
  });
});
