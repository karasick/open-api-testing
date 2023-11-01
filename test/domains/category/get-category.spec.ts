import { assert } from "chai";
import { ApiHttpClient } from "../../../src/utils/api-http-client";
import { components } from "../../../src/schema";

describe("Get Category", () => {
  it("should return something", async () => {
    const apiUrl = "http://localhost:3001/api/v1";
    const client = new ApiHttpClient(apiUrl);

    const categoryId = "137d642e-a5cb-50dc-8172-a2282631a9d7";
    const path = `/categories/${categoryId}`;
    const result = await client.get(path);
    assert.isDefined(result);

    const { status, data } = result;
    assert.equal(status, 200);
    assert.isDefined(data);

    const category = data as components["schemas"]["Category"];
    assert.equal(category.id, categoryId);
    console.log(category);
  });
});
