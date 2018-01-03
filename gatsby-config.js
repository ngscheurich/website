module.exports = {
  siteMetadata: {
    title: "N. G. Scheurich"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/posts`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
          { resolve: "gatsby-remark-images", options: { maxWidth: 600 } }
        ]
      }
    }
  ]
};
