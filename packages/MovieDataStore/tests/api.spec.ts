import {
  bindParametersToRemoteTaskType,
  httpGet,
  RemoteTaskType,
} from "../lib/http/api";

describe("API", () => {
  it("should correctly bind parameter to remote task", () => {
    expect(
      bindParametersToRemoteTaskType(RemoteTaskType.Search, "Batman")
    ).toBe("https://search.imdbot.workers.dev/?q=Batman");

    expect(
      bindParametersToRemoteTaskType(RemoteTaskType.Info, "tt123456")
    ).toBe("https://search.imdbot.workers.dev/?tt=tt123456");
  });

  describe("API httpGet", () => {
    it("should return success response", async () => {
      const response = await httpGet(RemoteTaskType.Search, "Batman");
      expect(response.status).toBe("success");
      expect(response.data).not.toBeNull();
    });

    it("should return error response", async () => {
      const response = await httpGet(RemoteTaskType.Info, "abc2dsds");
      expect(response.status).toBe("error");
      expect(response.data).toBeNull();
    });
  });

  // TODO- Add more test cases for httpGet function to test different scenarios, errors, etc.
});
