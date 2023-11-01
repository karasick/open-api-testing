import { assert } from "chai";
import { FAClient } from "../../src/utils/fa-client";

describe("FA Client Tests", () => {
  it("url should be defined", () => {
    const client = new FAClient();
    assert.isDefined(client.faUrl);
  });
});
