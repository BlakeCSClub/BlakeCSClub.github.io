import { error } from '@sveltejs/kit';
import { readdir } from 'fs/promises';
import { join } from 'path';
import { cwd } from 'process';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const images = await readdir(join(cwd(),"club-photos"));
 
  if (images) {
    return images;
  }
 
  throw error(404, "Not Found");
}