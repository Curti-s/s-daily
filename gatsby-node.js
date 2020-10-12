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
        exclusivePremierPosts: allGraphCmsExclusivePremierPost {
          nodes {
            id
            slug
          }
        }
        interviewPosts: allGraphCmsInterviewPost {
          nodes {
            id
            slug
          }
        }
        musicReviewPosts: allGraphCmsMusicReviewPost {
          nodes {
            id
            slug
          }
        }
      }
    `
  );

  if (!data || data.errors) throw new Error('error occurred ', data.errors) // not very informative

  // create About page
  const aboutPage = data.pages.nodes.filter(p => Boolean(p.slug.match(/^about-page$/)));
  aboutPage.forEach(p => {
    createPage({
      path: p.slug,
      component: path.resolve('src/templates/about-page.js'),
      context: { id: p.id }
    });
  });

  // create exclusive premier page
  const exclusivePremierPage = data.pages.nodes.filter(p => Boolean(p.slug.match(/^exclusive-premier-page$/)));
  exclusivePremierPage.forEach(p => {
    createPage({
      path: p.slug,
      component: path.resolve('src/templates/exclusive-premier-page.js'),
      context: { id: p.id },
    });
  });

  // create interview page
  const interviewPage = data.pages.nodes.filter(p => Boolean(p.slug.match(/^interview-page$/)));
  interviewPage.forEach(p => {
    createPage({
      path: p.slug,
      component: path.resolve('src/templates/interview-page.js'),
      context: { id: p.id },
    });
  });

  // create music review page
  const musicReviewPage = data.pages.nodes.filter(p => Boolean(p.slug.match(/^music-review-page$/)));
  musicReviewPage.forEach(p => {
    createPage({
      path: p.slug,
      component: path.resolve('src/templates/music-review-page.js'),
      context: { id: p.id },
    });
  });

  // create exclusivePremierPostPage
  const exclusivePremierPostPages = data.exclusivePremierPosts.nodes.filter(n => Boolean(n.slug.match(/^exclusive-premier-post$/)));
  exclusivePremierPostPages.forEach(p => {
    createPage({
      path: p.id,
      component: path.resolve('src/templates/exclusive-premier-post-page.js'),
      context: { id: p.id },
    });
  });

  // create interviewPostPage
  const interviewPostPages = data.interviewPosts.nodes.filter(n => Boolean(n.slug.match(/^interview-post$/)));
  interviewPostPages.forEach(p => {
    createPage({
      path: p.id,
      component: path.resolve('src/templates/interview-post-page.js'),
      context: { id: p.id },
    });
  });

  // create musicReviewPostPage
  const musicReviewPostPages = data.musicReviewPosts.nodes.filter(n => Boolean(n.slug.match(/^music-review-post$/)));
  musicReviewPostPages.forEach(p => {
    createPage({
      path: p.id,
      component: path.resolve('src/templates/music-review-post-page.js'),
      context: { id: p.id },
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
