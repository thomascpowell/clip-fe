import { writable } from 'svelte/store';

export const modal = writable<boolean>(false);
