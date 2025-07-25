import { writable } from 'svelte/store';

export type Status = {
  message?: string;
  error?: string;
};

export const status = writable<Status>({});
