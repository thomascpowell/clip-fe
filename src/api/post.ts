import type { JobRequest, JobResponse} from "./types";
import { backend } from "../store/backend"
import { get } from "svelte/store";

export async function postJob(data: JobRequest): Promise<JobResponse> {
  const controller = new AbortController();
  const url = get(backend); 
  const timeout = setTimeout(() => controller.abort(), 5000);
  try {
    const res = await fetch(`${url}/videos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      signal: controller.signal
    });
    clearTimeout(timeout);
    const json = await res.json();
    if (!res.ok) {
      return { error: json.error || `http error ${res.status}` };
    }
    return json;
  } catch (err: any) {
    clearTimeout(timeout);
    return { error: "network error or timeout" };
  }
}
