import { assert } from "chai";
import { ApiHttpClient } from "../../src/utils/api-http-client";

describe("Api HTTP Client Tests", () => {
  it("should return in progress", () => {
    const client = new ApiHttpClient("");
    assert.isDefined(client.apiUrl);
  });
});
