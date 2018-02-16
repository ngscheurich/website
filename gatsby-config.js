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
        path: `${__dirname}/src/posts`,
        name: "posts"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-prismjs",
          {
            resolve: "gatsby-remark-images",
            options: { maxWidth: 640, linkImagesToOriginal: false }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-31062667-5"
      }
    }
  ]
};
