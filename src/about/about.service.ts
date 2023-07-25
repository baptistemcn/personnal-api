import { Injectable } from "@nestjs/common";

@Injectable()
export class AboutService {
  findAll() {
    return `This action returns all about`;
  }
}
