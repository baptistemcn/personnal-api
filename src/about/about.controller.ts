import { Controller, Get, Header, HttpCode } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

import { AboutService } from "./about.service";

@ApiTags("About")
@Controller()
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Get()
  @HttpCode(200)
  @Header("Content-Type", "application/json")
  @ApiResponse({
    status: 200,
    description: "Get all experiences",
    content: {
      "application/json": {
        schema: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              presentation: { type: "string" },
              duration: { type: "string" },
              technologies: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                  },
                },
              },
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
    return this.aboutService.findAll();
  }
}
