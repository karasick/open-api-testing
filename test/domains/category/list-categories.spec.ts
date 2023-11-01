import { assert } from "chai";
import { ApiHttpClient } from "../../../src/utils/api-http-client";
import { components } from "../../../src/schema";

type PaginatedCategory = components["schemas"]["PaginatedCategory"];

describe("Get Categories", () => {
  it("should return PaginatedCategory", async () => {
    const client = new ApiHttpClient();

    const path = "/categories";
    const result = await client.get<PaginatedCategory>(path);
    assert.isDefined(result);

    const { status, data } = result;
    assert.equal(status, 200);
    assert.isDefined(data);

    const { elements, page, total_elements, page_size } = data;
    assert.isArray(elements);
    assert.isNumber(total_elements);
    assert.equal(page, 1);
    assert.equal(page_size, 100);
    console.log(data);
  });
});
