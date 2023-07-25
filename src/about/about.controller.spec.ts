import { Test, TestingModule } from "@nestjs/testing";
import { AboutController } from "./about.controller";
import { AboutService } from "./about.service";
import { StreamableFile } from "@nestjs/common";

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

    expect(result).toBeInstanceOf(StreamableFile);
  });
});
