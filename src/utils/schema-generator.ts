import openapiTS from "openapi-typescript";
import * as fs from "fs";

export class SchemaGenerator {
  schemaUrl: URL;

  constructor(url: string) {
    this.schemaUrl = new URL(url);
  }

  async createSchema(schemaPathName: string) {
    const ast = await openapiTS(this.schemaUrl);

    fs.writeFileSync(schemaPathName, ast);
  }
}
