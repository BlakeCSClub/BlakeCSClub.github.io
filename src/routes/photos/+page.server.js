import { error } from '@sveltejs/kit';
import { readdir } from 'fs/promises';
import { resolve } from 'path';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const images = await readdir(resolve("club-photos"));
 
  if (images) {
    return images;
  }
 
  throw error(404, "Not Found");
}