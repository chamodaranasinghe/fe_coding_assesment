/*
  this file contains the types for the HTTPResponses
*/

export type HTTPResponse = {
  status: "success" | "error" | "network-error";
  data: unknown;
};
