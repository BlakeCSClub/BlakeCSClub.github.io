import {readdir} from "fs/promises";

console.log(await readdir('static/club-photos'));