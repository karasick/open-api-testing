import * as dotenv from "dotenv";

type ConfigValueType = string;

export class ConfigParser {
  constructor(envFilePath?: string) {
    if (!envFilePath) return;

    dotenv.config({
      path: envFilePath,
    });
  }

  get(key: string): ConfigValueType | undefined {
    const value = process.env[key];
    return `${value}`;
  }

  getOrThrow(key: string): ConfigValueType {
    const value = process.env[key];
    if (!value) {
      throw new Error(`Environment variable with key ${key} not found`);
    }

    return `${value}`;
  }

  static getEnvPath(): string {
    const nodeEnv = process.env.NODE_ENV;
    return nodeEnv ? `.env.${nodeEnv}` : ".env";
  }
}
