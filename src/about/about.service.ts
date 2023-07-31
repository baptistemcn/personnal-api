import { Injectable } from "@nestjs/common";

import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AboutService {
  constructor(private prisma: PrismaService) {}

  findAll(language: string) {
    return this.prisma.experience.findMany({
      where: {
        languages: {
          some: {
            language: {
              equals: language,
            },
          },
        },
      },
      include: {
        technologies: true,
      },
    });
  }
}
