import {readdir, writeFile} from "fs/promises";

await writeFile("./src/lib/club-photos.json",JSON.stringify(await readdir('static/club-photos')));
console.log("image path rendered","\n","--------------------","\n");
