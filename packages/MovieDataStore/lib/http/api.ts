/*
This file contains the functions to make the http requests to the remote server.
*/

import { HTTPResponse } from "../types/http-response";

//this is the url of the remote server, later it can be moved to the .env file or provided as an argument or env variable
const REMOTE_SERVER = "https://search.imdbot.workers.dev/";

//this enum is used to define the type of the remote task (search or info)
export enum RemoteTaskType {
  Search = "q",
  Info = "tt",
}

//this function is used to make the http request to the remote server
export async function httpGet(
  remoteTaskType: RemoteTaskType,
  query: string
): Promise<HTTPResponse> {
  try {
    const response = await fetch(
      bindParametersToRemoteTaskType(remoteTaskType, query)
    );
    if (response.ok) {
      return { status: "success", data: await response.json() };
    } else {
      return { status: "error", data: null };
    }
  } catch (e) {
    console.error(e);
    return { status: "network-error", data: null };
  }
}

//this function is used to bind the query params to the url
export function bindParametersToRemoteTaskType(
  remoteTaskType: RemoteTaskType,
  query: string
): string {
  const url = new URL(REMOTE_SERVER);
  url.searchParams.append(remoteTaskType, query);
  return url.href;
}
