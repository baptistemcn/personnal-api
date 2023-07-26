import { Module } from "@nestjs/common";
import { APP_GUARD, RouterModule } from "@nestjs/core";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";

import { AboutModule } from "./about/about.module";
import { HealthModule } from "./health/health.module";

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
    ThrottlerModule.forRoot({
      ttl: 600,
      limit: 5,
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
