import { writable } from 'svelte/store';

export const backend = writable<string>('http://localhost');
