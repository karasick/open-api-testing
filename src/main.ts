import { SchemaGenerator } from "./utils/schema-generator";
import { ConfigParser } from "./utils/config-parser";

async function bootstrap() {
  const nodeEnv = process.env.NODE_ENV;
  const envPath = nodeEnv ? `.env.${nodeEnv}` : ".env";
  const config = new ConfigParser(envPath);

  const apiUrl = config.getOrThrow("API_OPEN_API_JSON_URL");
  const generator = new SchemaGenerator(apiUrl);
  await generator.createSchema("./src/schema.ts");
}

bootstrap();
