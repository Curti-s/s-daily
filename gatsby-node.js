const path = require('path')

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(
    `
      {
        pages: allGraphCmsPage {
          nodes {
            id
            slug
          }
        }
      }
    `
  )

  if (data.errors) throw data.errors // not very informative

  // create About page
  const aboutPage = data.pages.nodes.filter(p => Boolean(p.slug.match(/^about-page$/)));
  aboutPage.forEach(p => {
    createPage({
      path: p.slug,
      component: path.resolve('src/templates/about-page.js'),
      context: { id:p.id }
    });
  });

  // create exclusive premier page 
  const exclusivePremierPage = data.pages.nodes.filter(p => Boolean(p.slug.match(/^exclusive-premier-page$/)));
  exclusivePremierPage.forEach(p => {
    createPage({
      path: p.slug,
      component: path.resolve('src/templates/exclusive-premier-page.js'),
      context: { id:p.id },
    });
  });

  const interviewPage = data.pages.nodes.filter(p => Boolean(p.slug.match(/^interview-page$/)));
  interviewPage.forEach(p => {
    createPage({
      path: p.slug,
      component: path.resolve('src/templates/interview-page.js'),
      context: { id:p.id },
    });
  });

  const musicReviewPage = data.pages.nodes.filter(p => Boolean(p.slug.match(/^music-review-page$/)));
  musicReviewPage.forEach(p => {
    createPage({
      path: p.slug,
      component: path.resolve('src/templates/music-review-page.js'),
      context: { id:p.id },
    });
  });
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    GraphCMS_Post: {
      formattedDate: {
        type: 'String',
        resolve: (source) => {
          const date = new Date(source.date)

          return new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }).format(date)
        },
      },
    },
  }

  createResolvers(resolvers)
}
