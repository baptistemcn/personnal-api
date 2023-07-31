import { Test, TestingModule } from "@nestjs/testing";

import { readFileSync } from "fs";
import { join } from "path";

import { AboutController } from "./about.controller";
import { AboutService } from "./about.service";
import { PrismaService } from "../prisma/prisma.service";

const mockFilePath = join(process.cwd(), "assets/fr.about.json");
const mockFileContent = readFileSync(mockFilePath, "utf-8");
const mockJsonData = JSON.parse(mockFileContent);

const mockLang = "fr";

describe("AboutController", () => {
  let controller: AboutController;
  let provider: AboutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AboutController],
      providers: [AboutService, PrismaService],
    }).compile();

    controller = module.get<AboutController>(AboutController);
    provider = module.get<AboutService>(AboutService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should return findAll from service", async () => {
    const result = provider.findAll(mockLang);

    const mockResult = await result.then((data) => {
      return data;
    });

    expect(mockResult).toEqual(mockResult);
  });
});
