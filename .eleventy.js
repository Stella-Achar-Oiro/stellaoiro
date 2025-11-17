const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  // Copy assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");

  // Syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // Date filter - readable format
  eleventyConfig.addFilter("readableDate", dateObj => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Reading time filter
  eleventyConfig.addFilter("readingTime", content => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  });

  // Excerpt filter
  eleventyConfig.addFilter("excerpt", content => {
    const excerpt = content.substring(0, 200);
    return excerpt + '...';
  });

  // Get current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Collections
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/posts/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("featuredPosts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/posts/*.md")
      .filter(post => post.data.featured)
      .sort((a, b) => b.date - a.date)
      .slice(0, 3);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
