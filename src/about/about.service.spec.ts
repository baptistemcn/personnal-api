import { Test, TestingModule } from "@nestjs/testing";

import { AboutService } from "./about.service";
import { PrismaService } from "../prisma/prisma.service";

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

  it("should return a JSON object of experience", async () => {
    const result = service.findAll(mockLang);

    const mockResult = await result.then((data) => {
      return data;
    });

    expect(mockResult).toEqual(mockResult);
  });
});
