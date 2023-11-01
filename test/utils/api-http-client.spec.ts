import { assert } from "chai";
import { ApiHttpClient } from "../../src/utils/api-http-client";

describe("Api HTTP Client Tests", () => {
  it("url should be defined", () => {
    const client = new ApiHttpClient();
    assert.isDefined(client.apiUrl);
  });
});
