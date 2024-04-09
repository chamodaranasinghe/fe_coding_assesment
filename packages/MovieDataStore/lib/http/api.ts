import HTTPResponse from "../types/http-response";

const REMOTE_SERVER = "https://search.imdbot.workers.dev/";

export enum RemoteTaskType {
  Search = "q",
  Info = "tt",
}

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

export function bindParametersToRemoteTaskType(
  remoteTaskType: RemoteTaskType,
  query: string
): string {
  const url = new URL(REMOTE_SERVER);
  url.searchParams.append(remoteTaskType, query);
  return url.href;
}
