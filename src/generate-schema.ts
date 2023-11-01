import { SchemaGenerator } from "./utils/schema-generator";

async function generate() {
  const generator = new SchemaGenerator();
  await generator.createSchema("./src/schema.ts");
}

generate();
