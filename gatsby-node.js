const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  if (node.internal.type === 'MarkdownRemark') {
    createNodeField({
      name: 'slug',
      node,
      value: createFilePath({
        node,
        getNode,
        trailingSlash: false,
      }),
    })

    createNodeField({
      name: 'sourceInstanceName',
      node,
      value: getNode(node.parent).sourceInstanceName,
    })
  }
}

exports.createPages = async ({
  actions: { createPage, getNode },
  graphql,
  reporter,
}) => {
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { draft: { ne: true } } }
        limit: 1000
      ) {
        nodes {
          html
          fields {
            sourceInstanceName
            slug
          }
          frontmatter {
            date
            tags
            title
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.nodes.forEach(
    ({ fields: { sourceInstanceName, slug }, frontmatter, html }) => {
      switch (sourceInstanceName) {
        case 'blog':
          createPage({
            component: require.resolve(`./src/components/blog-layout.tsx`),
            path: `/blog${slug}`,
            context: { frontmatter, html },
          })
          break
      }
    },
  )
}
