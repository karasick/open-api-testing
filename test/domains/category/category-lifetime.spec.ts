import { assert } from "chai";
import { ApiHttpClient } from "../../../src/utils/api-http-client";
import { components } from "../../../src/schema";

type Category = components["schemas"]["Category"];
type CategoryPayload = components["schemas"]["CreateCategoryDto"];

describe("Category Lifetime", () => {
  let categoryId: string | null = null;
  const client = new ApiHttpClient();

  describe("Create Category", () => {
    it("should return new Category", async () => {
      const path = "/categories";
      const payload: CategoryPayload = {
        name: "New API Category Mock",
        external_id: "api_id_mock",
      };
      const result = await client.post<Category>(path, payload);
      assert.isDefined(result);

      const { status, data } = result;
      assert.equal(status, 201);
      assert.isDefined(data);

      assert.isString(data.id);
      categoryId = data.id;

      assert.equal(data.name, payload.name);
      assert.equal(data.external_id, payload.external_id);
      assert.isString(data.created_at);
      assert.isString(data.updated_at);
      assert.isString(data.modified_by);
      console.log(data);
    });
  });

  describe("Get Category", () => {
    it("should return Category", async () => {
      assert.isDefined(categoryId);
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

  describe("Update Category", () => {
    it("should return updated Category", async () => {
      assert.isDefined(categoryId);
      const path = `/categories/${categoryId}`;
      const payload: CategoryPayload = {
        name: "New API Category Mock",
        external_id: "api_id_mock_1",
      };
      const result = await client.put<Category>(path, payload);
      assert.isDefined(result);

      const { status, data } = result;
      assert.equal(status, 200);
      assert.isDefined(data);

      assert.isString(data.id);
      assert.equal(data.name, payload.name);
      assert.equal(data.external_id, payload.external_id);
      assert.isString(data.created_at);
      assert.isString(data.updated_at);
      assert.isString(data.modified_by);
      console.log(data);
    });
  });

  describe("Delete Category", () => {
    it("should return empty string", async () => {
      assert.isDefined(categoryId);
      const path = `/categories/${categoryId}`;
      const result = await client.delete(path);
      assert.isDefined(result);

      const { status, data } = result;
      assert.equal(status, 200);
      assert.isDefined(data);

      assert.isString(data);
      assert.equal(data, "");
      console.log(data);
    });
  });
});
