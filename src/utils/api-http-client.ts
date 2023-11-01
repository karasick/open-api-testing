import axios, { AxiosHeaders, AxiosResponse } from "axios";
import { ConfigParser } from "./config-parser";
import { FAClient } from "./fa-client";

export class ApiHttpClient {
  apiUrl: string;
  private faClient;

  constructor() {
    const config = new ConfigParser(".env.dev");
    this.apiUrl = config.getOrThrow("API_URL");

    this.faClient = new FAClient();
  }

  async get<T>(path: string): Promise<AxiosResponse<T>> {
    const url = new URL(this.apiUrl + path);
    const headers = new AxiosHeaders();
    const token = await this.faClient.getToken();
    headers.set("Authorization", `${token.token_type} ${token.access_token}`);

    return await axios.get<T>(url.toString(), {
      headers,
    });
  }
}
