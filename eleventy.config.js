export default async function(eleventyConfig) {
	eleventyConfig.setInputDirectory("src");

  eleventyConfig.addPassthroughCopy("src/static");

  eleventyConfig.addGlobalData("layout", "layout.html");

  eleventyConfig.addDateParsing((value) => {
    if (value) {
      value.setUTCHours(20);
    }
    return value;
  })
};