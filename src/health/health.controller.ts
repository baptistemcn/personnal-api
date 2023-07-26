import { Controller, Get, Header, HttpCode } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

import { HealthService } from "./health.service";

@ApiTags("Health")
@Controller()
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  @HttpCode(200)
  @Header("Content-Type", "application/json")
  @ApiResponse({
    status: 200,
    description: "Health check",
    content: {
      "application/json": {
        schema: {
          properties: {
            message: { type: "string" },
          },
        },
      },
    },
  })
  check() {
    return this.healthService.check();
  }
}
