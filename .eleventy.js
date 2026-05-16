module.exports = function(eleventyConfig) {
  // Favicons — copy to output root so they live at /favicon.ico, /favicon.svg, etc.
  eleventyConfig.addPassthroughCopy({
    "src/favicon.ico": "favicon.ico",
    "src/favicon.svg": "favicon.svg",
    "src/favicon-16x16.png": "favicon-16x16.png",
    "src/favicon-32x32.png": "favicon-32x32.png",
    "src/apple-touch-icon.png": "apple-touch-icon.png",
    "src/android-chrome-192x192.png": "android-chrome-192x192.png",
    "src/android-chrome-512x512.png": "android-chrome-512x512.png"
  });

  // Static assets
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
      output: "_site",
      data: "data"
    }
  };
};
