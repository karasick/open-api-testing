import { ConfigParser } from "./config-parser";
import axios, { AxiosHeaders } from "axios";

type FAToken = {
  access_token: string;
  expires_in: number;
  token_type: string;
  userId: string;
};

type FATokenCredentials = {
  client_id: string;
  client_secret: string;
  grant_type: string;
  username: string;
  password: string;
};

export class FAClient {
  faUrl: string;
  private token?: FAToken;
  private readonly credentials: FATokenCredentials;

  constructor() {
    const config = new ConfigParser(".env.dev");
    this.faUrl = config.getOrThrow("FA_URL");
    this.credentials = {
      client_id: config.getOrThrow("FA_CLIENT_ID"),
      client_secret: config.getOrThrow("FA_CLIENT_SECRET"),
      grant_type: config.getOrThrow("FA_GRANT_TYPE"),
      username: config.getOrThrow("FA_USERNAME"),
      password: config.getOrThrow("FA_PASSWORD"),
    };
  }

  async getToken(): Promise<FAToken> {
    if (this.token) {
      return this.token;
    } else {
      return await this.getNewAccessToken();
    }
  }

  private async getNewAccessToken(): Promise<FAToken> {
    const url = new URL(this.faUrl);
    const headers = new AxiosHeaders();
    headers.set("Content-Type", "multipart/form-data");
    const result = await axios.post<FAToken>(url.toString(), this.credentials, {
      headers,
    });
    this.token = result.data;
    return result.data;
  }
}
