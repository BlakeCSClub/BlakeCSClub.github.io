import { e as error } from "../../../chunks/index2.js";
import { readdir } from "fs/promises";
import { resolve } from "path";
async function load({ params }) {
  const images = await readdir(resolve("./static/club-photos"));
  if (images) {
    return images;
  }
  throw error(404, "Not Found");
}
export {
  load
};
