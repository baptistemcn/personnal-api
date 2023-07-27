import { Test, TestingModule } from "@nestjs/testing";
import { ProjectsService } from "./projects.service";
import { readFileSync } from "fs";
import { join } from "path";

const mockFilePath = join(process.cwd(), "assets/projects.json");
const mockFileContent = readFileSync(mockFilePath, "utf-8");
const mockJsonData = JSON.parse(mockFileContent);

describe("ProjectsService", () => {
  let service: ProjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectsService],
    }).compile();

    service = module.get<ProjectsService>(ProjectsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should return a JSON objects of projects", () => {
    const result = service.findAll();

    expect(result).toEqual(mockJsonData);
  });
});
