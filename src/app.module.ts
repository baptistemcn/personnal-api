import { Module } from "@nestjs/common";
import { APP_GUARD, RouterModule } from "@nestjs/core";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";

import { AboutModule } from "./about/about.module";
import { HealthModule } from "./health/health.module";
import { CertificationsModule } from "./certifications/certifications.module";
import { ProjectsModule } from "./projects/projects.module";
import { PrismaService } from "./prisma/prisma.service";

@Module({
  imports: [
    AboutModule,
    CertificationsModule,
    HealthModule,
    ProjectsModule,
    RouterModule.register([
      {
        path: "about",
        module: AboutModule,
      },
      {
        path: "certifications",
        module: CertificationsModule,
      },
      {
        path: "health",
        module: HealthModule,
      },
      {
        path: "projects",
        module: ProjectsModule,
      },
    ]),
    ThrottlerModule.forRoot({
      ttl: 600,
      limit: 10,
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    PrismaService,
  ],
})
export class AppModule {}
