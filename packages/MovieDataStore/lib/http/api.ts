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

/**
 * This function makes a GET request to the remote server with the given remoteTaskType and query.
 * @param {RemoteTaskType} remoteTaskType - The type of the remote task (search or info)
 * @param {string} query - The query to search for
 * @returns {HTTPResponse} An HTTPResponse object
 */
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

/**
 * This function binds the remoteTaskType and query to the remote server url.
 * @param {RemoteTaskType} remoteTaskType - The type of the remote task (search or info)
 * @param {string} query - The query to search for
 * @returns {string} The url with the remoteTaskType and query parameters
 */
export function bindParametersToRemoteTaskType(
  remoteTaskType: RemoteTaskType,
  query: string
): string {
  const url = new URL(REMOTE_SERVER);
  url.searchParams.append(remoteTaskType, query);
  return url.href;
}
