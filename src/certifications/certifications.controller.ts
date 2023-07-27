import { Controller, Get, Header, HttpCode } from "@nestjs/common";
import { CertificationsService } from "./certifications.service";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Certifications")
@Controller()
export class CertificationsController {
  constructor(private readonly certificationsService: CertificationsService) {}

  @Get()
  @HttpCode(200)
  @Header("Content-Type", "application/json")
  @ApiResponse({
    status: 200,
    description: "Get all certifications",
    content: {
      "application/json": {
        schema: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              link: { type: "string" },
              inProgress: { type: "boolean" },
            },
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: "Server Error",
  })
  findAll() {
    return this.certificationsService.findAll();
  }
}
