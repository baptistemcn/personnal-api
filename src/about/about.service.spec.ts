import { Test, TestingModule } from "@nestjs/testing";
import { AboutService } from "./about.service";
import { StreamableFile } from "@nestjs/common";

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

    expect(result).toBeInstanceOf(StreamableFile);
  });
});
