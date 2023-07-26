import { Test, TestingModule } from "@nestjs/testing";

import { readFileSync } from "fs";
import { join } from "path";

import { AboutController } from "./about.controller";
import { AboutService } from "./about.service";

const mockFilePath = join(process.cwd(), "assets/about.json");
const mockFileContent = readFileSync(mockFilePath, "utf-8");
const mockJsonData = JSON.parse(mockFileContent);

describe("AboutController", () => {
  let controller: AboutController;
  let provider: AboutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AboutController],
      providers: [AboutService],
    }).compile();

    controller = module.get<AboutController>(AboutController);
    provider = module.get<AboutService>(AboutService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should return findAll from service", () => {
    const result = provider.findAll();

    expect(result).toEqual(mockJsonData);
  });
});
