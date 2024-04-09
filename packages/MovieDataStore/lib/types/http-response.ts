type HTTPResponse = {
  status: "success" | "error" | "network-error";
  data: unknown;
};

export default HTTPResponse;
