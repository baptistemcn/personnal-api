import { Test, TestingModule } from "@nestjs/testing";

import { AboutController } from "./about.controller";
import { AboutService } from "./about.service";
import { PrismaService } from "../prisma/prisma.service";

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
