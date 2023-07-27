import { Test, TestingModule } from "@nestjs/testing";
import { CertificationsController } from "./certifications.controller";
import { CertificationsService } from "./certifications.service";
import { readFileSync } from "fs";
import { join } from "path";

const mockFilePath = join(process.cwd(), "assets/certifications.json");
const mockFileContent = readFileSync(mockFilePath, "utf-8");
const mockJsonData = JSON.parse(mockFileContent);

describe("CertificationsController", () => {
  let controller: CertificationsController;
  let provider: CertificationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CertificationsController],
      providers: [CertificationsService],
    }).compile();

    controller = module.get<CertificationsController>(CertificationsController);
    provider = module.get<CertificationsService>(CertificationsService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should return findAll from service", () => {
    const result = provider.findAll();

    expect(result).toEqual(mockJsonData);
  });
});
