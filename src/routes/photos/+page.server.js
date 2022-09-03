import { error } from '@sveltejs/kit';
import { readdir } from 'fs/promises';
import { join } from 'path';
import { cwd } from 'process';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  // console.log(cwd());
  // console.log(await (promisify(glob))(cwd()+'/**/*'))
  console.log(cwd(),await readdir(join(cwd())));
  try {
    // const images = await readdir(join(cwd(),"static","club-photos"));
    const images = await readdir(join(cwd(),".svelte-kit","output","client","club-photos"));

    // if (images) {
    //   return images;
    // }
  } catch {
    console.log("stuff's still broken")
  }
  try {
    console.log("fail 1")
    console.log(await readdir(join(cwd(),".svelte-kit","output","client","club-photos")))
  } catch {
    try {
      console.log("fail 2")
      console.log(await readdir(join(cwd(),".svelte-kit","output","client")))
    } catch {
      try {
        console.log("fail 3")
        console.log(await readdir(join(cwd(),".svelte-kit","server")))
      } catch {
        try {
          console.log("fail 4")
          console.log(await readdir(join(cwd(),".svelte-kit")))
        } catch {
          console.log("this is stupid")
        }
      }
    }
  }
 
  throw error(404, "Not Found");
}