import { assert } from "chai";
import { ApiHttpClient } from "../../../src/utils/api-http-client";
import { components } from "../../../src/schema";

type Category = components["schemas"]["Category"];

describe("Get Category", () => {
  it("should return something", async () => {
    const client = new ApiHttpClient();

    const categoryId = "137d642e-a5cb-50dc-8172-a2282631a9d7";
    const path = `/categories/${categoryId}`;
    const result = await client.get<Category>(path);
    assert.isDefined(result);

    const { status, data } = result;
    assert.equal(status, 200);
    assert.isDefined(data);

    assert.equal(data.id, categoryId);
    console.log(data);
  });
});
