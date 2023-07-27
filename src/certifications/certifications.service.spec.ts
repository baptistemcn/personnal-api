import { Test, TestingModule } from "@nestjs/testing";
import { CertificationsService } from "./certifications.service";
import { readFileSync } from "fs";
import { join } from "path";

const mockFilePath = join(process.cwd(), "assets/certifications.json");
const mockFileContent = readFileSync(mockFilePath, "utf-8");
const mockJsonData = JSON.parse(mockFileContent);

describe("CertificationsService", () => {
  let service: CertificationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CertificationsService],
    }).compile();

    service = module.get<CertificationsService>(CertificationsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should return a JSON object of certifications", () => {
    const result = service.findAll();

    expect(result).toEqual(mockJsonData);
  });
});
