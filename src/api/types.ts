// sent to server
export interface JobRequest {
  url: string;
  format: string;
  volumeScale: string;
  startTime: string;
  endTime: string;
}

// responce from server: JobRequest
export interface JobResponse {
  id?: string;
  message?: string;
  error?: string;
}

// response from server: status endpoint 
export interface JobStatus {
  url?: string;
  message?: string;
  error?: string;
}

