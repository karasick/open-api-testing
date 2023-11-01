import openapiTS from "openapi-typescript";
import * as fs from "fs";
import { ConfigParser } from "./config-parser";

export class SchemaGenerator {
  schemaUrl: string;

  constructor() {
    const envPath = ConfigParser.getEnvPath();
    const config = new ConfigParser(envPath);
    this.schemaUrl = config.getOrThrow("API_OPEN_API_JSON_URL");
  }

  async createSchema(schemaPathName: string) {
    const ast = await openapiTS(this.schemaUrl);

    fs.writeFileSync(schemaPathName, ast);
  }
}
