import { sveltekit } from "@sveltejs/kit/vite";
import { imagetools } from "vite-imagetools";

const config = {
  plugins: [sveltekit(), imagetools({
    defaultDirectives: (url) => {
      return new URLSearchParams({
        format: 'webp'
      })
    }
  })],
};

export default config;
