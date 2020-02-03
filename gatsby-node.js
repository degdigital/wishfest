const path = require('path');
const slash = require('slash');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allContentfulBandDetail {
        edges {
          node {
            id
            bandName
            bandSiteUrl
            slug
            bandDescription {
              bandDescription
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      console.log("Error retrieving contentful data", result.errors);
    }
    // Resolve the paths to our template
    const bandDetailTemplate = path.resolve("./src/templates/bandDetail.js");
    // Then for each result we create a page.
    result.data.allContentfulBandDetail.edges.forEach(edge => {
      createPage({
        path: `/bands/${edge.node.slug}/`,
        component: slash(bandDetailTemplate),
        context: {
          slug: edge.node.slug,
          id: edge.node.id,
          bandName: edge.node.bandName,
          bandSiteUrl: edge.node.bandSiteUrl,
          bandDescription: edge.node.bandDescription.bandDescription
        }
      });
    });
  })
    .catch(error => {
      console.log("Error retrieving contentful data", error);
    });
};