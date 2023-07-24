import { Module } from "@nestjs/common";
import { HealthModule } from "./health/health.module";
import { RouterModule } from "@nestjs/core";

@Module({
  imports: [
    HealthModule,
    RouterModule.register([
      {
        path: "health",
        module: HealthModule,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
