import { writable } from 'svelte/store';
import type { Status } from '../api/types.ts'

export const status = writable<Status>({});
