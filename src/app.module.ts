import { Module } from "@nestjs/common";
import { HealthModule } from "./health/health.module";
import { RouterModule } from "@nestjs/core";
import { AboutModule } from "./about/about.module";

@Module({
  imports: [
    AboutModule,
    HealthModule,
    RouterModule.register([
      {
        path: "health",
        module: HealthModule,
      },
      {
        path: "about",
        module: AboutModule,
      },
    ]),
    AboutModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
