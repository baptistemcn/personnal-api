import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

import { AppModule } from "./app.module";
import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV !== "production") {
    const config = new DocumentBuilder()
      .setTitle("Baptiste Marcon API")
      .setDescription("Baptiste Marcon API swagger")
      .setVersion("1.0")
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("swagger", app, document);
  }

  const corsOptions: CorsOptions = {
    origin: [
      "https://baptistemcn.onrender.com/",
      "https://baptistemcn.surge.sh/",
      "http://http://localhost:5173/",
    ],
    methods: "GET",
    allowedHeaders: "Content-Type,Authorization",
  };
  app.enableCors(corsOptions);

  const port = process.env.NODE_ENV === "production" ? 80 : 3000;

  await app.listen(port);
}
bootstrap();
