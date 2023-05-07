module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy({
        "_src/images/": "img/"
    });

    eleventyConfig.setLiquidOptions({
        dynamicPartials: false,
        strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
    });

    return {
        templateFormats: [
            "md",
            "html",
            "liquid",
            "njk",
        ],
        markdownTemplateEngine: "liquid",
        dataTemplateEngine: "liquid",
        htmlTemplateEngine: "liquid",
        dir: {
            input: "_src",
        }
    }
};