import type { JobStatus } from "./types";
import { backend } from "../store/backend"
import { get } from "svelte/store";

async function getStatus(id: string): Promise<JobStatus> {
  let res: any;
  const url = get(backend); 
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);
  try {
    res = await fetch(`${url}/status/${id}`, {
      method: "GET",
      signal: controller.signal
    });
    clearTimeout(timeout)     
  } catch (error: any) {
    clearTimeout(timeout)     
    return { error: "server error" };
  }
  const json = await res.json();
  if (!res.ok) {
   return { error: json.error || `http error ${res.status}` };
  }
  return json
}

export async function waitForVideo(id: string): Promise<JobStatus> {
  const interval = 2000;
  const maxAttempts = 20;
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    console.log(attempt)
    const status = await getStatus(id);
    if (status.error) {
      return { error: status.error }
    }
    if (status.url) {
      return { url: status.url }
    }
    await new Promise((r) => setTimeout(r, interval));
  }
  return { error: "request timed out"}
}


