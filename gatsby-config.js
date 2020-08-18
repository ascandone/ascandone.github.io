module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-images`,
    `gatsby-plugin-sharp`,

    `gatsby-plugin-postcss`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `pages`,
    //     path: `${__dirname}/src/pages/`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blog/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/pages/blog/`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-page-creator',
    //   options: {
    //     path: `${__dirname}/src/posts`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          posts: require.resolve('./src/components/blog-layout.tsx'),
          // default: require.resolve('./src/components/default-page-layout.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
  ],
}
