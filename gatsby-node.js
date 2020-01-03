/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const privacyTemplate = path.resolve(`src/templates/privacy.js`);
  const privacyData = await graphql(`
    {
      markdownRemark(
        frontmatter: { path: { eq: "/politica-de-privacidade" } }
      ) {
        frontmatter {
          path
        }
      }
    }
  `);

  if (privacyData.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);

    return;
  }

  if (privacyData.data && privacyData.data.markdownRemark) {
    createPage({
      path: privacyData.data.markdownRemark.frontmatter.path,
      component: privacyTemplate,
      context: {},
    });
  }
};
