import { Controller, Get, Header, HttpCode } from "@nestjs/common";
import { HealthService } from "./health.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Health")
@Controller()
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  @HttpCode(200)
  @Header("Content-Type", "application/json")
  check() {
    return this.healthService.check();
  }
}
