import { error } from '@sveltejs/kit';
import { readdir } from 'fs/promises';
import { join } from 'path';
import { cwd } from 'process';
import { glob } from 'glob';
import { promisify } from 'util';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  // console.log(cwd());
  // console.log(await (promisify(glob))(cwd()+'/**/*'))
  console.log(cwd(),await readdir(join(cwd(),".svelte-kit","output","client","club-photos")));

  // const images = await readdir(join(cwd(),"static","club-photos"));
  const images = await readdir(join(cwd(),".svelte-kit","output","client","club-photos"));

  if (images) {
    return images;
  }
 
  throw error(404, "Not Found");
}