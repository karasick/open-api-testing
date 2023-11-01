import { assert } from "chai";
import { ApiHttpClient } from "../../../src/utils/api-http-client";
import { components } from "../../../src/schema";

describe("Get Categories", () => {
  it("should return something", async () => {
    const apiUrl = "http://localhost:3001/api/v1";
    const client = new ApiHttpClient(apiUrl);

    const path = "/categories";
    const result = await client.get(path);
    assert.isDefined(result);

    const { status, data } = result;
    assert.equal(status, 200);
    assert.isDefined(data);

    const { elements, page, total_elements, page_size } =
      data as components["schemas"]["PaginatedCategory"];
    assert.isArray(elements);
    assert.isNumber(total_elements);
    assert.equal(page, 1);
    assert.equal(page_size, 100);
  });
});
