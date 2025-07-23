export interface JobRequest {
  url: string;
  format: string;
  volumeScale: string;
  startTime: string;
  endTime: string;
}

export interface JobResponse {
  id?: string;
  message?: string;
  error?: string;
}

export interface JobStatus {
  url?: string;
  message?: string;
  error?: string;
}

